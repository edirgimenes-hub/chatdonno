<template>
  <div class="training-panel">
    <h2>Otimize a IA LongCat 🧠</h2>
    <textarea
      v-model="customQNA"
      placeholder="Pergunta comum:Resposta ideal (separado por : )"
    ></textarea>
    <button @click="saveTraining">Treinar</button>
    <div class="feedback-log" v-html="lastFeedback"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customQNA: "",
      lastFeedback: "",
    };
  },
  methods: {
    async saveTraining() {
      const [q, a] = this.customQNA.split(":");
      await axios.post("/api/feedback", { question: q.trim(), answer: a.trim() });
      this.lastFeedback = `<strong>✅ Adicionado:</strong> "${q}" =&gt; "${a}"`;
    },
  },
};
</script>
