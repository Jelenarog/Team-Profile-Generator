const Intern = require('../lib/Intern');

describe("Intern", () => {
    it('Create intern', ()=>{
        const intern= new Intern('Jelena', '90', '1990', 'DU');
    
        expect(intern.school).toEqual('DU');
    })

    it('Get Intern role',()=>{
        const intern = new Intern('Jelena', '90', '1990','DU');
    
        expect(intern.getRole()).toEqual('Intern');  
    })
})