import {loginService,registerService} from "./auth.service";



describe("Register Service",()=>{

    beforeEach(()=>{
        
    })

    it("Register User Successfully",()=>{
        expect(registerService({name:"Anas",email:"test@gmail.com",password:"Admin@123"})).not.toBeNull();
    })

    it("Should not register user with existing email",()=>{
        
        registerService({name:"Anas",email:"test@gmail.com",password:"Admin@123"});
        expect(registerService({name:"Anas",email:"test@gmail.com",password:"Admin@123"})).toBeNull();

    })    

})

describe("Login Service",()=>{

    beforeEach(()=>{
        registerService({name:"Anas",email:"test@gmail.com",password:"Admin@123"});
    })

    it("Should Login Successfully",()=>{
        expect(loginService({email:"test@gmail.com",password:"Admin@123"})).not.toBeNull();
    })

    it("Should Not Login Successfully",()=>{
        expect(loginService({email:"test@gmail.com",password:"test"})).toBeNull();

    })

})