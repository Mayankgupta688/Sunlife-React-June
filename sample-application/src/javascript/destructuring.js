var employeeData = {
    name: "mayank",
    age: 20, 
    designation: "Manager",
    salary: 10
}

var { age: userAge, designation, ...otherProperties } = employeeData;


var dataArray = [10, 20, 30, 40, 50];
var [dataOne, dataTwo, dataThree, ...otherArray] = dataArray;

debugger;