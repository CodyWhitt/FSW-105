var employees = [
    { name: "" , jobTitle: "", salary: "", status: "" }
]

function employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full-time"
}

function printEmployeeForm(employed){
    console.log("Name: " + employed.name + ", Job Title: " + employed.jobTitle + ", Salary: " + employed.salary + ", Status: " + employed.status)
}

var employee1 = new employee("John Stainmost", "Master Stainer", 3 + "/hr")
    employee1.status = ("Part-time.")
    printEmployeeForm(employee1)
var employee2 = new employee("Master Chief", "Hero", 117 + "/hr")
    printEmployeeForm(employee2)
var employee3 = new employee("Harry Potter", "Human", 1 + " Rubber duck per day")
    printEmployeeForm(employee3)

employees.push(employee1, employee2, employee3)