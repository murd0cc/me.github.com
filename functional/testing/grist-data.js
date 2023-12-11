const data = {
    count: 0,
    invoice: '',
    status: 'waiting',
    tableConnected: false,
    rowConnected: false,
    haveRows: false,
    message: 'salut',
    };
    let app = undefined;
    


function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }



ready(function() {
    // Update the invoice anytime the document data changes.
    grist.ready({
        requiredAccess: 'read table'
      });

    // get notified of the access level 
    grist.onOptions(function(options, interaction) {
    console.log(interaction.access_level);
    });

    // when selecting a record run this function
    grist.onRecord(function(record) {
      document.getElementById('readout').innerHTML = JSON.stringify(References)
    })


    var app = new Vue({
        el: '#app',
        data: {
          // message: 'para',
          // message: '44+55',
        },
        methods: {
        },
        mounted() {
    
        }
    })

    // grist.onRecord(updateInvoice);
  
    // // Monitor status so we can give user advice.
    // grist.on('message', msg => {
    //   // If we are told about a table but not which row to access, check the
    //   // number of rows.  Currently if the table is empty, and "select by" is
    //   // not set, onRecord() will never be called.
    //   if (msg.tableId && !app.rowConnected) {
    //     grist.docApi.fetchSelectedTable().then(table => {
    //       if (table.id && table.id.length >= 1) {
    //         app.haveRows = true;
    //       }
    //     }).catch(e => console.log(e));
    //   }
    //   if (msg.tableId) { app.tableConnected = true; }
    //   if (msg.tableId && !msg.dataChange) { app.RowConnected = true; }
    // });
  
    // Vue.config.errorHandler = function (err, vm, info)  {
    //   handleError(err);
    // };
  
//     app = new Vue({
//       el: '#app',
//       data: data,
//     });

//     if (document.location.search.includes('demo')) {
//       updateInvoice(exampleData);
//     }
//     if (document.location.search.includes('labels')) {
//       updateInvoice({});
//     }
  });
