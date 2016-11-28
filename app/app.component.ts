import { Component, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    constructor( ) { }
    activeTab: string = 'home';

    selectTab(selected: string) {
        this.activeTab = selected;
    }
}