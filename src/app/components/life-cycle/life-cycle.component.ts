import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, Input, input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{
  
  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number){
    this.myNumber.set(value)
   };
   public myText = signal('Luiz');

   @ViewChild('content') public content!: ElementRef;
   @ContentChild('text') public text!: ElementRef;

  //  private _destroy$ = timer(0, 1000)
  //    .pipe(takeUntilDestroyed())
  //    .subscribe({
  //    next: (next) => console.log('next', next),
  //    error: (error) => console.log('error', error),
  //    complete: () => console.log('Complete!'),
  //  });

  // Construtor ou Inicializador
    constructor(private fb: FormBuilder){}

    // Changes Detections
    ngOnChanges(changes: SimpleChanges): void {
      //console.log('ngOnChanges', changes);
    }

    ngOnInit(): void {
      //console.log('ngOnInit');
    }

    ngDoCheck(): void {
      //console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
      //console.log('ngAfterContentInit');
      //console.log(this.text.nativeElement.innerText);
    }

    ngAfterContentChecked(): void {
      //console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
      //console.log(this.ngAfterViewInit);
      //console.log(this.content.nativeElement.innerText);
    }

    ngAfterViewChecked(): void {
      //console.log('ngAfterViewChecked');
    }


    ngOnDestroy(): void {
      console.log('ngOnDestroy');
      //this.destroy$.unsubscribe();
    }
}
