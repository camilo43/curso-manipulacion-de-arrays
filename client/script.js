
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

//******REDUCE Challenge**********

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

//************ Every Challenge ********

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


  //********* Join Example *********

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

  //**********flatMap Challenge ********

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
  console.log(rta3);