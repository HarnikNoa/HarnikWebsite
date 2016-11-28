import { Component, ViewContainerRef } from '@angular/core';
import { Headers, RequestOptions, Response, Http} from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {ToastsManager, Toast} from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'contact-tab',
    templateUrl: 'app/contact/contact.component.html'
})
export class ContactComponent {
    data: {} = { name: '', email: '', message: '' };
    busy: boolean = false;
    constructor(private http: Http, private toastr: ToastsManager, containerRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(containerRef);
    }

    onSubmit(form: FormGroup) {
        this.sendForm(form);
    }

    sendForm(form: FormGroup) {
        this.busy = true;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('https://formspree.io/harniknoa@gmail.com', JSON.stringify(this.data), {
            headers: headers
        }).subscribe(success => {
            this.busy = false;
            if (success) {
                this.toastSuccess(form);
            }
        },
            error => this.toastError()
        );

    }

    toastSuccess(form: FormGroup) {
        this.toastr.success('Message sent', 'Success!', { toastLife: 5000, showCloseButton: false });
        form.reset();
    }
    toastError() {
        this.toastr.error('Whoops. Something went wrong!  Please email Noa@SheCodedThat.com instead');
    }
}
