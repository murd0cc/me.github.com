const app = Vue.createApp({
    data(){
        return {
            factura:'Please connect to Grist to get data',
            client: Object,
            servicii: Object,
            companie: Object,
        }
    },
    mounted() {
        grist.ready({
            requiredAccess: 'read table' 
        })
        grist.onRecord((record) => {
            this.debug = record.References.Servicii,
            this.factura = record.References,
            this.client = record.References.Client,
            this.servicii = record.References.Servicii,
            this.companie = record.References.Invoicer,
            this.Proiect = record.References.Proiect
        })
      }
    
})

app.mount('#app')
