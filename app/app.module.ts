import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent} from  './home/welcome.component';
import { GameComponent } from './game/game.component'; 
import {LessonsComponent} from './lessons/lessons.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ContactComponent, AboutComponent, WelcomeComponent, GameComponent, LessonsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
