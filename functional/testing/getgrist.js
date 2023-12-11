const app = Vue.createApp({
    data(){
        return {
            gristinput:'Please connect to Grist to get data',
            client: Object,
            servicii: Object,
        }
    },
    mounted() {
        grist.ready({
            requiredAccess: 'read table' 
        })
        grist.onRecord((record) => {
          this.gristinput = record.References,
          this.client = record.References.Client
          this.servicii = record.References
        })
      }
    
})

app.mount('#app')
