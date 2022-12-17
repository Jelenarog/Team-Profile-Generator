
const Employee = require('../lib/Employee');

describe("Employee", () => {
it('Create an employee', ()=>{
    const employee = new Employee('Jelena', '90', '1990');

    expect(employee.name).toEqual('Jelena');
    expect(employee.id).toEqual('90');
    expect(employee.email).toEqual('1990');

})
it('Get employee name',()=>{
    const employee = new Employee('Jelena', '90', '1990');

    expect(employee.getName()).toEqual('Jelena');  
})
it('Get employee Id',()=>{
    const employee = new Employee('Jelena', '90', '1990');

    expect(employee.getId()).toEqual('90');  
})
it('Get employee Email',()=>{
    const employee = new Employee('Jelena', '90', '1990');

    expect(employee.getEmail()).toEqual('1990');  
})
it('Get employee role',()=>{
    const employee = new Employee('Jelena', '90', '1990');

    expect(employee.getRole()).toEqual("Employee");  
})
})