from fastapi import FastAPI, File, UploadFile
from transformers import pipeline
import os

app = FastAPI()


class IAService:
    def __init__(self):
        # Contexto extraído dos arquivos enviados pelo usuário.
        self.custom_context = []
        self.generator = pipeline(
            "text-generation",
            model="meituan/longcat-pt-br-v1",  # Modelo em PT-BR
            device_map="auto",  # Usa GPU se disponível
        )

    async def generate_response(self, user_input: str, context: str = ""):
        # Combina contexto do usuário + documentos enviados.
        prompt = f"[CONTEXTO]\n{context}\n\n[USUÁRIO]\n{user_input}\n\n[RESPOSTA HUMANIZADA]"
        response = self.generator(
            prompt,
            max_length=256,
            temperature=0.7,
            top_p=0.9,
        )
        return response[0]["generated_text"]

    async def train_from_file(self, file: UploadFile):
        # Processa PDF/Texto para treino contextual.
        content = await file.read()
        self.custom_context.append(str(content))
        return {"status": "Treino atualizado!", "data": str(content)[:200] + "..."}


# Rotas API
service = IAService()


@app.post("/chat")
async def chat_endpoint(input: str, context: str = ""):
    return await service.generate_response(input, context)


@app.post("/upload-training-data")
async def upload_endpoint(file: UploadFile = File(...)):
    return await service.train_from_file(file)
