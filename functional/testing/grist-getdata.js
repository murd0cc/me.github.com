// "use strict";
// console.clear()

/* VARIABLE DECLARATION */
// var data, paragraph, output, obiect

/* Variable Assigning */

// data = {
//   // name :'Para',
//   // references: {},
//   // invoicer:{},
//   // products:{},
// }

// paragraph = document.getElementById('prgf')

/* Variable Initialization */
// const body = document.getElementById('app')
// const heading = document.getElementsByTagName('h3')[0]


/* Vanilla JS - manipulating the HTML document */
// body.append(paragraph)
// heading.innerText = 'heading initial JS'
// console.log(paragraph.innerText)
// paragraph.innerText = 'outside function'

/* FUNCTION DEFINITIONS */
// function applyFunc(source){
//   output = source.References
//   // console.log(output)
//   // document.getElementById('prgf').innerText = 'inside function' // de ce pizda masii nu pot accesa global din functie - mai devreme nu mergea
//   // document.getElementById('prgf').innerText = JSON.stringify(output)
//   const obj = JSON.parse(JSON.stringify(output))
//   // paragraph.innerText = 'inside function' // aici nu pot accesa variabila
//   Object.assign(data, obj)
//   // return obj
// };

// creating the Vue app
const { createApp } = Vue

// createApp({
//   data() {
//     return data
//   }
// }).mount('#app')

createApp({
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    grist.ready({
        requiredAccess: 'read table' // Grist comunicating access requirements
    })
    grist.onRecord((record) => {
      this.data = record.References
      // this.data = {
      //   "Achitat": true,
      //   "Client": {
      //   "Account_Number": "RO15INGB0000999903387978",
      //   "Adresa": "str. Belizarie nr. 10, bl. 11/2b, ap. 19, București, Jud. sector 1",
      //   "Bank": "ING BANK",
      //   "CNP_CUI_CIF_": 21418376,
      //   "Nume": "ABRUPT ARHITECTURA SRL",
      //   "PJ": true,
      //   "Reprezentant": "Cristina Contantin",
      //   "id": 1,
      //   "inreg_ONRC": "J40/5863/22.03.2007"
      //   },
      //   }
    })
    // console.log(data.References)
  }
}).mount('#app')


// starting Grist
// grist.ready({
//     requiredAccess: 'read table' //Grist comunicating access requirements
// });


// grist.onRecord((record) => {
//   output = record.References
//   const obj = JSON.parse(JSON.stringify(output))
//   Object.assign(data, obj)
//   paragraph.innerText = 'inside function' // aici nu pot accesa variabila
// });

// grist.onRecord((record) => {
//   const obj = record.References
//   Object.assign(data, obj)
// });




/* RUNNING TESTS */
// console.log(typeof(data))
// console.log(typeof(Object.values(data)))
// console.log(Object.values(data).Achitat)
// console.log(data) //this value was evaluated upon first expanding it may have changed since then - primesc observatia asta.
// console.log(data.References) //aici primesc Undefined


// link to closest thing to my problem
// https://medium.com/@krishnaregmi/accessing-global-variable-in-javascript-ea457b4ab70a