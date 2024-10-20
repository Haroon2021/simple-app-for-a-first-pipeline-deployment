import { addAndSubtract } from "./addingAndSubtracting";

describe('addAndSubtract function', () => {
    it('should add 1 and 2 to get 3', () =>{
        expect(addAndSubtract(1, 2)[0]).toBe(3);
    })
    it('should calculate 7 minus 1 to get 6', () =>{
        expect(addAndSubtract(7, 1)[1]).toBe(6);
    })
  });