import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
    this.contacts$ = this.contactsService.getContacts();
    this.terms$
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(term => this.search(term)
    )
  }

  trackByContactId(index, contact) {
    return contact.id;
  }

  search(term: string){
    this.contacts$ = this.contactsService.search(term);
  }
}
