import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, map } from 'rxjs/operators';
import { ApplicationState } from '../state/contacts/app.state';
import { Store, select } from '@ngrx/store';
import { LoadContactsSuccessAction } from '../state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  terms$: Subject = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService, private store:Store <ApplicationState>) {}

  ngOnInit () {
    let query = (state) => state.contacts.list;
    this.contacts$ = this.store.pipe(select(query));


    this.contactsService
        .getContacts()
        .subscribe(contacts => {
          this.store.dispatch(
            new LoadContactsSuccessAction(contacts)
          );
        });
  }

  trackByContactId(index, contact) {
    return contact.id;
  }


}
