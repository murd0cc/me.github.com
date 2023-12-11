grist.ready();
grist.onRecord(function(record) {
  document.getElementById('readme').innerHTML = record.Numar;
});