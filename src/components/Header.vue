<template>
  <header>
    <div class="logo">
      <img :src="logo" alt="activision"></img>
    </div>
    <nav>
      <a href="/">Início</a>
      <a href="/about">Sobre</a>
      <a href="/services">Serviços</a>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/activision.png'
export default {
  name: 'Header',
  data(){
    return{
      logo
    }
  }
}
</script>

<style scoped>
header {
  background-color: #000000;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
  margin: 20px;
}
.logo img {
  height: 100px;
  width: auto;
}
</style>
