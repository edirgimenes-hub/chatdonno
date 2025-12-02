from PyPDF2 import PdfReader  # pip install PyPDF2
import spacy  # pip install spacy


def extract_pdf_knowledge(file_path: str) -> str:
    # Extrai texto do PDF
    reader = PdfReader(file_path)
    text = "\n".join([page.extract_text() for page in reader.pages])

    # Processa entidades (nicho específico)
    nlp = spacy.load("pt_core_news_sm")  # Modelo PT-br
    doc = nlp(text)
    entities = [ent.text for ent in doc.ents if ent.label_ in ["ORG", "PRODUCT"]]  # Ex: marcas, produtos

    return f"Dominío adicionado: {', '.join(entities[:5])}..."  # Feedback para usuário
