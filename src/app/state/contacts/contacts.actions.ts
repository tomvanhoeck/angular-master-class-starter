import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
    LOAD_CONTACT_SUCCESS = '[Contacts] Load success'
}


export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACT_SUCCESS;
    constructor(public payload: Array<Contact>) { }
  }
/** Implement LoadContactsSuccessAction payload class here */

export type ContactsActions = LoadContactsSuccessAction;
