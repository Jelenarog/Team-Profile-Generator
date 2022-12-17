
const Employee = require('../lib/Employee');

describe("Employee", () => {
it('Create an employee', ()=>{
    const employee = new Employee('Jelena', '90', 'test');

    expect(employee.name).toEqual('Jelena');
    expect(employee.id).toEqual('90');
    expect(employee.email).toEqual('test');

})
it('Get employee name',()=>{
    const employee = new Employee('Jelena', '90', 'test');

    expect(employee.getName()).toEqual('Jelena');  
})
it('Get employee Id',()=>{
    const employee = new Employee('Jelena', '90', 'test');

    expect(employee.getId()).toEqual('90');  
})
it('Get employee Email',()=>{
    const employee = new Employee('Jelena', '90', 'test');

    expect(employee.getEmail()).toEqual('test');  
})
it('Get employee roll',()=>{
    const employee = new Employee('Jelena', '90', 'test');

    expect(employee.getRole()).toEqual("Employee");  
})
})