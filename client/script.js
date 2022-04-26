
///////////////// REDUCE /////

//*********REDUCE Example********

/*const items = [1,3,2,3]

const rta = items.reduce((obj,item) => {
    if(!obj.item){       
       obj[item] = 1;
   } else {
       obj[item] = obj[item] + 1
   }
   return obj
}, {})

console.log(rta)

let a = {}

let b = a["perro"] = 5

console.log(a)*/

//****** REDUCE CHALLENGE **********

/*const numbers = [1,2,3,4,5,6,7,8,9,10]

let cambios = (desde, hasta) => {

//    console.log(numbers.filter(rango => rango >= desde && rango <= hasta).reduce((a,b,i) => {
//         return i },0))

//     console.log(numbers.filter(rango => rango >= desde && rango <= hasta).length)

    console.log(numbers.filter(rango => rango >= desde && rango <= hasta).reduce((a,b) => {
         if(!a[b]){
             a[b] = 1
            } 
             else {
                 console.log(`este es:  + ${a[b] = a[b] + 1}`)}
                return a},{}))
}*/

//************ EVERY CHALLENGE ********

/*const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

  const age = () => {
    team.every(e=> e.age < 15)? console.log("Yes they are") : console.log("No they are not")
  }*/


  //********* JOIN EXAMPLE *********

  /*const elements = ["Fire", "Air", "Water", "Tierra", "Aire", "Agua"]

  let rtaFinal = '';
  const separator = '--';
  const separador2 = '';

  for(let index = 0; index<elements.length; index++){
      const element = elements[index];
       
        index == elements.length-1? separator = '' : rtaFinal 

        rtaFinal = rtaFinal + element + separator
  }

  //console.log(rtaFinal2)
  console.log(rtaFinal)

  const unir = elements.join('--')
  console.log(unir)*/

  //********** FLATMAP CHALLENGE ********
/*
  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  
    const rta3 = Object.values(calendars).flatMap(item => {
      return item.map(date => date.startDate);
  });

  const rta3 = Object.values(calendars).flatMap(e=> e.map(j=> j.startDate))
  console.log(rta3);
  */


  //******* MUTABLE FUNCTIONS CHALLENGE *****
/*
  const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

  const productsV2 = []

  for(let i of products){
      if (i.id != "🥞"){
        productsV2.push(i)
    } else {
        console.log(productsV2) 
    }
  }

  const productsV3 = [
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

  const update = {
        id: "🍕",
        changes: {
            Description: "Delicious",
            Price: 250,
            Availability: "Now"
        }
  }

  let indexItem = productsV3.findIndex(e=> e.id == update.id)

  productsV3[indexItem].store = "Plaza Uno"

  let productCopyV3 = [...productsV3]
  productCopyV3[indexItem] = {...productCopyV3[indexItem], ...update.changes}
  

  console.log("ProductV3", productsV3)
  console.log("Check original-modifications", productsV3)
  console.log("ProductCopyV3", productCopyV3)
  */

    //******* SORT CHALLENGE *****

    const orders = [
        {
          customerName: "Nicolas",
          total: 600,
          delivered: true,
          date: new Date("2021 2 25 21:32:10")
        },
        {
          customerName: "Zulema",
          total: 120,
          delivered: false,
          date: new Date("2021 3 5 21:32:10")
        },
        {
          customerName: "Santiago",
          total: 1840,
          delivered: true,
          date: new Date("2021 1 22 21:32:10")
        },
        {
          customerName: "Valentina",
          total: 240,
          delivered: true,
          date: new Date("2021 2 19 21:32:10")
        },
      ];

      /*
      -------SORTING DATES-------

      let fechas  = [new Date("2021 6 1 21:32:10"), new Date("2021 5 1 21:32:10"), new Date("2021 4 1 21:32:10"), new Date("2021 3 1 21:32:10"), new Date("2021 2 1 21:32:10") ]

      let resultado = fechas.sort((a,b) => a - b)

      console.log(resultado)*/

      let newDates = orders.sort((a,b)=> a.date - b.date)

      console.log(newDates)