import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { Price } from '../lessons/price.component';

@Component({
    selector: 'lessons-tab',
    templateUrl: 'app/lessons/lessons.component.html',
})
export class LessonsComponent {
    constructor(private tabs: AppComponent) { }
    skillsList: string[] = ["Basic computer science concepts", "Making programs", "Making web pages", "Scratch", "Javascript","HTML", "CSS", "Object Oriented programming languages", "Analytical thinking", "Logic", "Action and consequence"];
    skills: string = "Skills taught vary depending on each girl's age and interests.  However, all students are taught basic concepts through activities and games.  Moreover, all girls are meant to feel empowered through the lessons.  Possible skills taught include, but are not limited to:";
    purpose: string = "The purpose of these lessons is to get girls in computer science before they reach an age where they're told they shouldn't be interested in the technicalities of computers and programs.  In the future they may not become software engineers, but it won't be because they're afraid to try or feel like they wouldn't be able to do it.  Below is a chart of the current percentages of women in different industry groups.  When it comes to technology women represent only 16% in software and 9% in hardware.";
    priceList: Array<Price> = [
        { description: "One 60 min lesson", amount: "$60" },
        { description: "Weekly 60 min lesson X 4 weeks", amount: "$220" },
        { description: "Weekly 60 min lesson X 6 weeks", amount: "$300" }
    ];

    onChangeTabs(tabName: string) {
        this.tabs.selectTab(tabName);
    }
}
