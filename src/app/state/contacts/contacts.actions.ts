import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
    LOAD_CONTACT_SUCCESS = '[Contacts] Load success',
    SELECT_CONTACT = '[Contacts] Select',
    UPDATE_CONTACT = '[Contacts] Update'
}


export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACT_SUCCESS;
    constructor(public payload: Array<Contact>) { }
  }

export class SelectContactAction implements Action {
    readonly type = ContactsActionTypes.SELECT_CONTACT;
    constructor(public payload: number) { }
}


export class UpdateContactAction implements Action {
    readonly type = ContactsActionTypes.UPDATE_CONTACT;
    constructor(public payload: Contact) { }
}
/** Implement LoadContactsSuccessAction payload class here */

export type ContactsActions = LoadContactsSuccessAction  
| SelectContactAction
| UpdateContactAction;
