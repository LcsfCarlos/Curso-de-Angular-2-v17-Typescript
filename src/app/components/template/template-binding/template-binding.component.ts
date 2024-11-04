import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Luiz Carlos";
  public age = 30;
  public condition = this.age > 1 ? "Teste" : "Teste2"

  public isDisabled = true
  public srcValue = 'https://vidafullstack.com.br/wp-content/uploads/2021/03/angular.jpg'

  public isTextDecoration = this.age >= 30 ? 'underline' : 'none';

  public sum(){
    return this.age++
  }

  public sub(){
    return this.age--;
  }

  public onKeyDown(event: Event){
    return console.log(event);
  }


  public onMouseMove(event: MouseEvent){
    return console.log({
      clietX: event.clientX,
      clietY: event.clientY
    })
  }
}
