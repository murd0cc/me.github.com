grist.ready({
    requiredAccess : 'read table'
  });
grist.onRecord((record) => {
    this.debug = record.References.Servicii,
    this.factura = record.References,
    this.client = record.References.Client,
    this.servicii = record.References.Servicii,
    this.companie = record.References.Invoicer,
    this.Proiect = record.References.Proiect
})
