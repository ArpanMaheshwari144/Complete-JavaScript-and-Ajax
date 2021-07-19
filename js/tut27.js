class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is best`;
    }

    joiningYear(){
        return 2020-this.experience;
    }

    static avgSalary(a,b){
        return a+b;
    }
}

// let Obj=new Employee('Arpan',15,'C.E.O');
// console.log(Obj);
// console.log(Employee.avgSalary(2000000,2000000));

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,givenProGitHub){
    super(givenName,givenExperience,givenDivision); //super ka mtlb iski parent class ke constructor ko call kardo
    this.language=givenLanguage;
    this.github=givenProGitHub;
    }

    favoriteLanguage(){               //static ke andar this keyword use nhi ho sakta
        if(this.language=='Java'){
            return 'He will get a job';
        } else{
            return 'He will not get a job';
        }
    }

    static Coding(a,b,c){
        if(a=='Python'){
            return a;
        } else if(b=='Java'){
            return b;
        } else{
            return c;
        }
    }
}

let Obj1=new Programmer('Arpan',15,'C.E.O','Java','ArpanGit');
console.log(Obj1);
console.log(Obj1.favoriteLanguage());
console.log(Programmer.Coding('Java','Python','JavaScript'));
