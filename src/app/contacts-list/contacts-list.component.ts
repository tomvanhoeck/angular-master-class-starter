import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  terms$: Subject = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit () {
    const searchResult = this.terms$
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.contactsService.search(term)),
    );

    this.contacts$ = merge(this.contactsService.getContacts(), searchResult);
  }

  trackByContactId(index, contact) {
    return contact.id;
  }


}
