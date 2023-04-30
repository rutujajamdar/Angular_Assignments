import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})


export class MarvellouschkPipe implements PipeTransform {

  CheckEven(No : number) : boolean
  {
      if(No%2 == 0)
      {
        return true;
      }
      return false;
  }
  checkPrime(No : number) : boolean
  {
    let iCnt : number = 0;
      for(iCnt = 2;iCnt < No;iCnt++)
      {
          if(No % iCnt == 0)
          {
            break;
          }
      }
      if(iCnt == No)
      {
        return true;
      }

      return false;
  }

  checkPerfect(No : number) : boolean
  {
    let iCnt : number = 0;
    let Sum : number = 0;
      for(iCnt = 1;iCnt < No;iCnt++)
      {
          if(No % iCnt == 0)
          {
            Sum += iCnt;
          }
      }
      if(Sum == No)
      {
        return true;
      }

      return false;
  }
  transform(value: number, ...args: string[]): string {
    
    if(args[0] == "Even")
    {
       if(this.CheckEven(value))
       {
          return "It is a Even Number";
       }
       return "It is not a Even number";
    }
    
    else if(args[0] == "Prime")
    {
       if(this.checkPrime(value))
       {
          return "It is a Prime Number";
       }
       return "It is not a Prime number";
    }
    else if(args[0] == "Perfect")
    {
       if(this.checkPerfect(value))
       {
          return "It is a Perfect Number";
       }
       return "It is not a Perfect number";
    }
    else if(args[0] == "Odd")
    {
       if(!(this.CheckEven(value)))
       {
          return "It is a Odd Number";
       }
       return "It is not a Odd number";
    }

    return "Invalid input";
  }

}



