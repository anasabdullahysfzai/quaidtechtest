import {generatePasswordHash,validatePassword} from "./utils";

let hash : string;

describe("User Class Test",()=>{

    beforeEach(()=>{
        hash = generatePasswordHash("test");
    })

    it("generate correct hash multiple times",()=>{
        expect(hash).toEqual(generatePasswordHash("test"));
    })

    it("verifies the password correctly",()=>{
        expect(validatePassword("test",hash)).toEqual(true);
    })

})