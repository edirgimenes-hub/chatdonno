import { useRef } from "react";

export default function DragDropUploader({ colors }) {
  const fileInput = useRef();

  const handleUpload = async (files) => {
    if (!files?.length) return;

    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const response = await fetch("/upload-training-data", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Treinamento atualizado:", result);
    } catch (error) {
      console.error("Falha ao enviar arquivo para treino:", error);
    }
  };

  return (
    <div
      onClick={() => fileInput.current?.click()}
      style={{
        border: `3px dashed ${colors.primary}`,
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        color: colors.light,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleUpload(e.dataTransfer.files);
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        e.target.style.background = `${colors.dark}B3`;
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.target.style.background = "transparent";
      }}
    >
      <input
        type="file"
        ref={fileInput}
        onChange={(e) => handleUpload(e.target.files)}
        style={{ display: "none" }}
        accept=".pdf,.txt"
      />
      <h3>📁 Solte PDFs aqui</h3>
      <p style={{ opacity: 0.7 }}>
        PDFs ou textos para treinar o <strong>ChatDonno</strong>
      </p>
    </div>
  );
}
