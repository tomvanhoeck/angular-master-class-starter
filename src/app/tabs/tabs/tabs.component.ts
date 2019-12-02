import { Component, QueryList, AfterContentInit, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs:QueryList<TabComponent> = [];

  constructor() { }

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  addTab(tab: TabComponent){
    this.tabs.push(tab);
    this.select(this.tabs[0]);
  }

  select(selectedTab: TabComponent){
    this.tabs.forEach(tab => {
      if (tab === selectedTab) {
        tab.selected = true;
        return;
      }
      tab.selected = false;
      return;
    });
  }

}
