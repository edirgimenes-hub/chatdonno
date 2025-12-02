import { ChatBox, FileUpload } from "../components";

export default function Home() {
  const vibrantColors = {
    primary: "#FF6B6B", // Coral vibrante (botões)
    secondary: "#4ECDC4", // Verde água (chat)
    dark: "#292F36", // Fundo escuro
    light: "#F7FFF7", // Textos claros
  };

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${vibrantColors.primary} 0%, ${vibrantColors.secondary} 100%)`,
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Cabeçalho com Logo */}
      <header style={{ padding: "20px", textAlign: "center" }}>
        <h1
          style={{
            color: vibrantColors.light,
            fontSize: "3rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ChatDonno
        </h1>
      </header>

      {/* Painel Principal */}
      <main
        style={{
          display: "flex",
          gap: "30px",
          padding: "20px",
        }}
      >
        {/* Coluna Esquerda - Upload */}
        <section
          style={{
            flex: 1,
            background: vibrantColors.dark,
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <FileUpload colors={vibrantColors} />
        </section>

        {/* Coluna Direita - Chat */}
        <section style={{ flex: 2 }}>
          <ChatBox colors={vibrantColors} />
        </section>
      </main>
    </div>
  );
}
