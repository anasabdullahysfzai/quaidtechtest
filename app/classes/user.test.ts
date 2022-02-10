import User from "./user.class"


let user : User;

describe("User Class Test",()=>{

    beforeEach(()=>{
        user = new User("testname","testemail","testpasswordhash");
    })

    it("Has `name` attribute",()=>{
        expect(user).toHaveProperty("name");
    })

    it("Has `email` attribute",()=>{
        expect(user).toHaveProperty("email");
    })

    it("Has `passwordHash` attribute",()=>{
        expect(user).toHaveProperty("passwordHash");
    })

    it("Stores name , email and passwordHash" , ()=>{
        expect(user.name).toEqual("testname");
        expect(user.email).toEqual("testemail");
        expect(user.passwordHash).toEqual("testpasswordhash");
    })

})