// Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
const app = new Vue({
    el: "#app",
    data: {
        indirizzoEmail: []
 },
    mounted(){
        for(i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.indirizzoEmail.push(risultato);
            
        });
        
        }
        
    }
});