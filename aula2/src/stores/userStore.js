// Exemplo: Login da pagina

import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        nome: '',
        email: '', 
        logado: false
    }),
    actions: {
        login(nome, email) {
            this.nome = nome
            this.email = email
            this.logado = true
        },
        logout(){
            this.nome = ''
            this.email = ''
            this.logado = false 
        }
    }
})


