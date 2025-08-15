<template>
  <footer>
    <p>© 2025 CALL OF DUTY. Todos os direitos reservados.</p>
    <p>{{ store.dataAtual }}</p>

  </footer>
</template>

<script>
import { userMainStore } from '../stores/mainStore';

export default {
  name: 'Footer',

  setup() {
    const store = userMainStore()
    return {store}
  }
}
</script>

<style scoped>
footer {
  background-color: black;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
