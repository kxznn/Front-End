// importa a função defineStore do Pinia

import { defineStore } from 'pinia'

// Cria o store principal chamado 'main'

export const userMainStore = defineStore('main', {
    state:() => ({
        // exemplo
        text: 'By Activision', 
        dataAtual: new Date().toDateString() // Data atual formatada, variável global
    })
})