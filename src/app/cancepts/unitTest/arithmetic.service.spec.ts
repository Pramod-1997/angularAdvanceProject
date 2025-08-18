import { TestBed } from '@angular/core/testing';

import { ArithmeticService } from './arithmetic.service';
import { SharedService } from './shared.service';

describe('ArithmeticService', () => {
   let service: ArithmeticService;
   let shared : SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ArithmeticService,SharedService]
    });
      service = TestBed.inject(ArithmeticService);
      shared = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should multiple 2 numbers', ()=> {

    // const shared = new SharedService()
    // const calc = new ArithmeticService(shared);

    const result = service.multiple(2,5);
    expect(result).toBe(10);
  })

   it('should add 2 numbers', ()=> {

    // const shared = new SharedService()
    // const calc = new ArithmeticService(shared);

    const result = service.add(2,2);
    expect(result).toBe(4);
  })

  it("should call the mySharedFunction function",()=>{
 // const shared = new SharedService()
     const shared = jasmine.createSpyObj("SharedService",["mySharedFunction"])

    //spyOn(shared,"mySharedFunction")
    // spyOn(shared,"mySharedFunction").and.callThrough()
    const calc = new ArithmeticService(shared);
    const result = calc.multiple(2,5);
    expect(shared.mySharedFunction).toHaveBeenCalled()
  })


});
