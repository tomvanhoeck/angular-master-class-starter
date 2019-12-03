import { Contact } from './../models/contact';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { SelectContactAction } from '../state/contacts/contacts.actions';
import { map } from 'rxjs/operators';
import { ApplicationState } from '../state/contacts/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  @Input() contact$: Observable<Contact>;

  @Output() public edit = new EventEmitter<void>();
  @Output() public list = new EventEmitter<void>();
  
  constructor(private route: Router, private activeRoute:ActivatedRoute, private store: Store<ApplicationState>) {}

  ngOnInit() {
    this.activeRoute.params
    .pipe(map(params => +params.id))
    .subscribe(id => this.store.dispatch(new SelectContactAction(id)));

    this.contact$ = this.store.pipe(
        select(state => state.contacts.list.find(contact => contact.id === state.contacts.selectedContactId)),
        map(contact => ({...contact}))
      );
  }
}
