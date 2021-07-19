const proto={
    slogan:function(){
        return `This company is the best`;
    },
    changeName:function(newName){
        this.name=newName;
    }
}

// This will creates arpan object
// const arpan=Object.create(proto);
// arpan.name='Arpan';
// arpan.role='Programmer';
// arpan.changeName('Arpan2');
// console.log(arpan);

//This also creates arpan object
// const arpan=Object.create(proto,{
//     name:{value:"Arpan",writable:true},
//     role:{value:"Programmer"}
// })
// arpan.changeName('Arpan2');
// console.log(arpan);

//Employee Constructor
function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//Slogan
Employee.prototype.slogan=function(){
    return `This company is the best. Regards, ${this.name}`;
}

//Create an object from this constructor now
let employeeObj=new Employee('Arpan',10000000000,15);
console.log(employeeObj);
console.log(employeeObj.slogan());

//Programmer Constructor
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;
}

//Inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor=Employee;

let programmerObj=new Programmer('Arpan2',100000000000,15,'Java');
console.log(programmerObj);
console.log(programmerObj.slogan());
