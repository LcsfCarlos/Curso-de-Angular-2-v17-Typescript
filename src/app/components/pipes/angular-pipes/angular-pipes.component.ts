import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomStringPipe } from '@pipes/custom-string.pipe';



@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {
    public date = signal (new Date());
    public json = signal ([
      {name: 'Luiz Carlos'}
    ])

    public loadingData$: Observable<string[]> = of([
      'item 1',
      'item 2',
      'item 3',
    ]).pipe(delay(3000));
}
