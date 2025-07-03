class Employee {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age
    }

    getDetails() {
        console.log(this.userAge +  " " + this.userName)
    }
}

class Manager extends Employee {
    constructor(name, age, designation) {
        super(name, age);
        this.designation = designation;
    }
}

var employeeOne = new Employee("Mayank", 10);

employeeOne.getDetails();

var employeeTwo = new Employee("Anshul", 12)

var employeeThree = new Manager("Meha", 12, "Manager")
employeeThree.getDetails();

debugger;