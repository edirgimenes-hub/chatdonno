import sqlite3


def log_feedback(question: str, answer: str):
    conn = sqlite3.connect("database/feedback.db")
    conn.execute(
        """
    CREATE TABLE IF NOT EXISTS training (
        id INTEGER PRIMARY KEY,
        question TEXT UNIQUE,
        answer TEXT,
        hits INTEGER DEFAULT 0
    )"""
    )
    conn.execute(
        "INSERT OR REPLACE INTO training(question, answer) VALUES (?, ?)",
        (question, answer),
    )
    conn.commit()
    return "Dado treinado com sucesso!"
