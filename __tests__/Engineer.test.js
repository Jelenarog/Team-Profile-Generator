const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it('Create engineer', ()=>{
        const engineer = new Engineer('Jelena', '90', '1990', 'Jelenar90');
    
        expect(engineer.github).toEqual('Jelenar90');
    })

    it('Get github name', ()=>{
        const engineer = new Engineer('Jelena', '90', '1990', 'Jelenar90');
    
        expect(engineer.getGithub()).toEqual('Jelenar90');
    })

    it('Get Engineer role',()=>{
        const engineer = new Engineer('Jelena', '90', '1990','Jelenar90');
    
        expect(engineer.getRole()).toEqual('Engineer');  
    })
})