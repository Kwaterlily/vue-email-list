// Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el: "#app",
    data: {
        primoIndirizzoEmail: 0,
        secondoIndirizzoEmail: 0,
        terzoIndirizzoEmail: 0,
        quartoIndirizzoEmail: 0,
        quintoIndirizzoEmail: 0,
        sestoIndirizzoEmail: 0,
        settimoindirizzoEmail: 0,
        ottavoIndirizzoEmail: 0,
        nonoIndirizzoEmail: 0,
        decimoIndirizzoWmail: 0
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.primoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.secondoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.terzoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.quartoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.quintoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.sestoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.settimoindirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.ottavoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.nonoIndirizzoEmail = risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.decimoIndirizzoWmail = risultato;
        });
        
    }
})