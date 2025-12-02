import os
from dotenv import load_dotenv


def get_api_key():
    load_dotenv()  # Carrega .env

    key = os.getenv("LONG_API_KEY")
    if not key or key == "INSIRA_SUA_CHAVE_AQUI":
        raise ValueError(
            """
        ⚠️ Chave LongCat não configurada!
        Passos:
        1. Edite o arquivo .env
        2. Substitua por sua chave real
        3. NUNCA comite este arquivo no GitHub
        """
        )

    # Máscara para logs (ex: ak_1sY4...3yZ1E)
    masked = f"{key[:6]}...{key[-4:]}"
    print(f"✅ LongCat API Key carregada: {masked}")
    return key
