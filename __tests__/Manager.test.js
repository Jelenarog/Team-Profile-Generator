const Manager = require('../lib/Manager');

describe("Manager", () => {
    it('Create manager', ()=>{
        const manager= new Manager('Jelena', '90', '1990', '123456789');
    
        expect(manager.officeNumber).toEqual('123456789');
    })

    it('Get Manager role',()=>{
        const manager = new Manager('Jelena', '90', '1990','123456789');
    
        expect(manager.getRole()).toEqual('Manager');  
    })
})