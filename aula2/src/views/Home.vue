<template>
  <Header />
  <section class="container">
    <h2>Seja bem-vindo nossa loja de Games</h2>
    <p><Em>Explore nossas franquias de jogos e mergulhe nas aventuras imersivas.</Em></p>
    <p>{{ store.text }} </p>

    <div class="cards">
      <div class="card">
        <img src="../assets/BO2.jpg" alt="BO2">
      </div>
      <div class="card">
        <img src="../assets/BO3.jpg" alt="BO3">
      </div>
      <div class="card">
        <img src="../assets/BO4.jpg" alt="BO4">
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { userMainStore } from '../stores/mainStore'

export default {
  name: 'Home',
  components: { Header, Footer },
  setup() {
    const store = userMainStore()

    return {
      store
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.container h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  background-color: var(--card-background);
  color: var(--text-color);
  padding: 1rem;
  border-radius: 16px;
  width: 280px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
  cursor: pointer;
}

.card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.card h2 {
  font-size: 1.3rem;
  margin: 0;
  color: var(--text-color);
}


.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  background-color: #2a2a2a;
}
</style>
