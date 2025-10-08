class students{
    constructor(name,age,size,location){
    this.name=name;
    this.age=age;
    this.size=size;
    this.location=location;
    }
    vote(){
        if(this.age>=18){
            console.log("wemerewe gutora");
        }
        else{
            console.log("banza ukure");
        }
    }
}
const students_1= new students('John',13,'12.5 cm','Rusizi');
const students_2= new students('Joseph',19,'1.5 cm','KGL');
const students_3= new students('peter',11,'10.5 cm','Burundui');

console.log(students_1.age);
students_2.vote();
students_3.vote();

