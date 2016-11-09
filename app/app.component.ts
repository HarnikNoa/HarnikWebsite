import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    activeTab: string = 'home';

    selectTab(selected: string) {
        this.activeTab = selected;
    }
}