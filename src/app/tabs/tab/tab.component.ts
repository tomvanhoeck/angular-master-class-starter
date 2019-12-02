import { TabsComponent } from './../tabs/tabs.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() selected = false;
  @Input() title = '';

  constructor() { }


}
