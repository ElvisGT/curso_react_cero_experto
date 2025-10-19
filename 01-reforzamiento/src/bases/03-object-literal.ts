interface Person {
    name:string;
    age:number;
    address?:Address;
}

interface Address{
    postalCode:string
    city:string
}



const person:Person = {
    name:"Elvis",
    age:26,
    address:{
        postalCode:'1234',
        city:'Barcelona'
    }
}

const animal:Person = {
    name: "Pol",
    age: 2,
}


console.log(person,animal)