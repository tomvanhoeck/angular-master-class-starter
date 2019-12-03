import { Observable, Observer, Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventBusServiceService implements OnInit{

  message:Subject<EventBusArgs> = new Subject<EventBusArgs>();

  constructor() { }

  ngOnInit() {

  }

  emit(eventType:string, data:any){
    this.message.next({type: eventType, data});
  }

  observe(eventType:string):Observable<any> {
    return this.message.pipe(
      filter(e => e.type === eventType),
      map(args => args.data),
    );
  }
}
export interface EventBusArgs {
  type : string;
  data: any;
} 

