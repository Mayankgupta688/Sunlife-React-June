class employeeClass {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        var name = name
        console.log("Name One: " + this.name);
        setTimeout(function() {
            console.log("Name Two: " + this.name);
        }, 0);
        console.log("Name One: " + this.name);
        setTimeout(() => {
            console.log("Name Three: " + this.name);
        }, 0);
    }
}

var employeeObjectOne = new employeeClass("Mayank");
employeeObjectOne.getDetails();
