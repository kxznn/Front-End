<template>
  <Header />
  <section>
    <h2>Sobre Nós</h2>
    <p>A Activision é uma referência global em entretenimento digital, especializada no desenvolvimento e publicação de jogos inovadores que proporcionam experiências imersivas para jogadores em todo o mundo.<br>
       Entre suas franquias mais conhecidas estão Call of Duty, Crash Bandicoot, Spyro e Tony Hawk's Pro Skater.</p>
  </section>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style scoped>

section {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--section-background);
  border-radius: var(--border-radius);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  color: var(--text-color);
  line-height: 1.6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
}

section h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
}

section p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  text-align: justify;
}

</style>
