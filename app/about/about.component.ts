import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
    selector: 'about-tab',
    templateUrl: 'app/about/about.component.html'
})
export class AboutComponent {

    constructor(private tabs: AppComponent) {
    }

    onChangeTabs(tabName: string) {
        this.tabs.selectTab(tabName);
    }
}
