import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome to Noa\'s Site!';
    public notableWoman: string = "Ada Lovelace";
    public notableWomanInfo: string = '"The daughter of famed poet Lord Byron, Augusta Ada Byron, Countess of Lovelace- better known as "Ada Lovelace"-was born in London on December 10, 1815. Ada showed her gift for mathematics at an early age. She translated an article on an invention by Charles Babbage, and added her own comments. Because she introduced many computer concepts, Ada is considered the first computer programmer. Ada died on November 27, 1852."';

}
