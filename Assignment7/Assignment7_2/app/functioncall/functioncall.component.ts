import { Component } from '@angular/core';

@Component({
  selector: 'app-functioncall',
  templateUrl: './functioncall.component.html',
  styleUrls: ['./functioncall.component.css']
})
export class FunctioncallComponent {
    str : string = "Marvellous Infosystems";

    public fun() : string
    {
       return this.str;
    }
}
