import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact$:Observable<Contact>;

  constructor(
    private contactsService: ContactsService, 
    private route: ActivatedRoute,
    private router: Router) { 

    }

  ngOnInit() {
    this.contact$ = this.contactsService.getContact(this.route.snapshot.paramMap.get('id'));
  }

  navigateToEditor(contact: Contact){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  navigateToList(){
    this.router.navigate(['']);
  }
}
