import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
//  host: {
//    role: 'button',
//    '[attr.class]': 'class',
//    '(document:keypress)': 'updateHostListener($event)',
//    '(click)': 'updateClick()',
//  }
})
export class HostElementsComponent {

    @HostBinding('attr.class') public class = 'vidafullstack';

    @HostListener('document: keypress', ['$event'])
    public updateHostListener(envet: KeyboardEvent){
      console.log(envet);
    }

    @HostListener('click', ['$event'])
    public updateClick(){
      alert ('Luiz Carlos');
    }
  }
