import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 class = "bcolor"> Marvellous Infosystems </h1>
  Feedback <input type = "text" value = "Best">`,
  styles: [`
  .bcolor
  {
    color : blue
  }
  `]
})
export class AppComponent {
  title = 'April15';
}
