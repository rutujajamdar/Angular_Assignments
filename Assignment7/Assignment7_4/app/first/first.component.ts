import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  str : string = "Marvellous Infosystems";
  public upper()
  {
    this.str = this.str.toUpperCase();
  }
  public lower()
  {
    this.str = this.str.toLowerCase();
  }
}
