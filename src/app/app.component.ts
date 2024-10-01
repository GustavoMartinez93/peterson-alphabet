import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputString: string = '';
  result: number = 0;

  calculate(){
    this.result =0;
    const str = this.inputString.toLowerCase();
    for(let i=0; i<str.length; i++){
      const char = str[i];
      if(char >= 'a' && char <= 'z'){
        this.result += char.charCodeAt(0) - 96;
      }
      else if (char >= '0' && char <= '9') {
        this.result += parseInt(char);
      }
    }
  }




}
