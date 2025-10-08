// ::::::::::::::::::::::::::::::::Variables:::::::::::::::::::::::::::

// const name='John';
// let age =34;

// console.log(name);
// console.log(age);

// age =30;
// console.log(age);


// ::::::::::::::::::::::::::::Arrays::::::::::::::::::::::::::::::::

// const array_of_names=['john','Peter','paul','Joseph'];
// console.log(array_of_names.length);

// if(array_of_names.length>10){
//     console.log("wujuje");
// }
// else{
//     console.log("ntabwo uruzuza");
// }

// ::::::::::::::::::::::::::::::::objects:::::::::::::::::::::::::

const array_of_stuents=[
  {

    name:'John',
    age:13,
    size:'15 cm',
    locatuon:'KGL',
    vote(){
        if(this.age>=18){
            console.log("wemerewe gutora");
        }
        else{
            console.log('Ntabwo wemerewe gutora');
        }
    }
},
{

    name:'perter',
    age:10,
    size:'12 cm',
    locatuon:'KGL'
},
{

    name:'Joseph',
    age:13,
    size:'15 cm',
    locatuon:'Rusizi'
}
];

array_of_stuents[0].vote();