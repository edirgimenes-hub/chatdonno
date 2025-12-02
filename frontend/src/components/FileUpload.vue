<template>
  <div class="upload-area" @dragover.prevent="dragging = true">
    <input type="file" accept=".pdf,.txt" @change="handleFile" />
    <p v-if="loading">Treinando LongCat com seus dados... {{ progress }}%</p>
    <lottie-player
      v-else
      src="mascot.json"
      background="transparent"
      speed="1"
      style="width: 200px"
      autoplay
    >
    </lottie-player>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { file: null, loading: false, progress: 0, dragging: false };
  },
  methods: {
    async handleFile(event) {
      this.file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", this.file);

      this.loading = true;
      await axios.post("/api/process_file", formData, {
        onUploadProgress: (e) => {
          this.progress = Math.round((e.loaded * 100) / e.total);
        },
      });
      alert("Domínio carregado! LongCat já tem especialidade no seu nicho! 🚀");
      this.loading = false;
    },
  },
};
</script>
