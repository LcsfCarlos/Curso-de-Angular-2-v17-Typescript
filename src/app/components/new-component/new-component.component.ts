import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent implements OnInit{
  public name = 'NewComponent';

    #apiService = inject(ApiService);
  
    ngOnInit(): void {
      console.log(this.#apiService.name())
  
      this.#apiService.name$.subscribe({
        next : (next) => console.log(next),
        error : (error) => console.log(error), 
        complete : () => console.log("complete!"), 
        });

      this.#apiService.name$.next('Luiz Carlos $$')

      this.#apiService.name.set("Luiz Carlos 2")

      setTimeout(() => {
         console.log(this.#apiService.name()) 
      }, 2000)
    }
}
