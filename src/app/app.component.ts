import { Observable } from 'rxjs';
import { EventBusServiceService } from './tabs/event-bus-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">{{title$|async}}</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit{
  public title$: Observable<any>;
  constructor(private eventBusServiceService:EventBusServiceService) {
  }

  ngOnInit(){
    this.title$ = this.eventBusServiceService.observe('appTitleChange');
  }
}
