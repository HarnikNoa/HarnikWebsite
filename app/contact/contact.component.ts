import { Component } from '@angular/core';
import { Headers, RequestOptions, Http} from '@angular/http';


@Component({
    selector: 'contact-tab',
    templateUrl: 'app/contact/contact.component.html'
})
export class ContactComponent {
    data: {} = { name: '', email: '', message: '' };
    constructor(private http: Http) {
    }

    onSubmit() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('https://formspree.io/harniknoa@gmail.com', JSON.stringify(this.data), {
            headers: headers
        }).subscribe(function (data) {

        });
    }
}
