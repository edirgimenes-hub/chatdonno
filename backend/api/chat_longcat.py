import requests
from decouple import config  # pip install python-decouple


def get_longcat_response(user_input: str, context: str = "") -> str:
    url = "https://api.meituan.com/longcat/v1/chat"  # Endpoint meu (exemplo)
    headers = {
        "Authorization": f"Bearer {config('LONG_API_KEY')}",
        "Content-Type": "application/json",
    }
    payload = {
        "message": user_input,
        "context": context,  # Histórico das últimas 3 interações
        "language": "pt-BR",
        "params": {
            "temperature": 0.7,  # Criatividade ajustável
            "max_tokens": 300,
            "persona": "amigável, empático, responde como humano",  # Prompt customizado
        },
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()["response"]
