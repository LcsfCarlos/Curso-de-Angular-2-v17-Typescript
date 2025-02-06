import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new-component/new-component.component';

//Service 
import { ApiService } from 'app/services/api.service';
import { concat, concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
  
  #apiService = inject(ApiService);

  //public getTask = signal<null | Array<{
  //  id: string;
  //  title: string;
  //}>>(null);

  public getTaskList = this.#apiService.getTaskList;

  public getTaskId = this.#apiService.getTaskId;

  public getTaskListError = this.#apiService.getTaskListError;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskUpdateError = this.#apiService.getTaskUpdateError;
  public getTaskDeleteError  = this.#apiService.getTaskDeleteError;

  ngOnInit(): void {
    //this.getTask$.subscribe({
    //  next: (next) => {
    //console.log(next)
    //this.getTask.set(next);
    //  },
    //  error: (error) => console.log(error),
    //  complete: () => console.log('Complete!'),
    //});


    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$('2TWoKtLeA5F2ZuuoJDLY').subscribe();
  }

  public httpTaskCreate(title: string){
    return this.#apiService
    .httpTaskCreate$(title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe();
  }

  public httpTaskUpdate(id: string, title: string){
    return this.#apiService
    .httpTaskUpdate$(id, title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe();
  }

  public httpTaskDelete(id: string){
    return this.#apiService
    .httpTaskDelete$(id)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe();
  }
}
