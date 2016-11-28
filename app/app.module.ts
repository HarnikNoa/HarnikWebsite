import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent }  from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent} from  './home/welcome.component';
import { GameComponent } from './game/game.component'; 
import {LessonsComponent} from './lessons/lessons.component';

let config: any = {
    animate: 'flyRight',
    newestOnTop: false,
    showCloseButton: true,
};


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ToastModule.forRoot(config),],
    declarations: [AppComponent, ContactComponent, AboutComponent, WelcomeComponent, GameComponent, LessonsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
