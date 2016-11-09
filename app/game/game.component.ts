import { Component } from '@angular/core';


@Component({
    selector: 'game-tab',
    templateUrl: 'app/game/game.component.html'
})
export class GameComponent {   
   completedHash: { [id: string]: string } =
   {
   ["Conditionals"]: "if ( ) then ",
   ["Variable declaration"]: "var x = 4;",
   ["Loops"]: "foreach item in array",
   ["Relational operators"]: "x >= 4",
   ["Expression"]: "2 + 3"
   };
   conceptList: string[] = this.createConceptList();
   implementationList: string[] = this.createImplementationList();
   conceptClick: boolean = false;
   implementClick: boolean = false;
   oldConcept: string;
   oldImplementation: string;
   borderHighlight: number;
   borderAnswerHighlight: number;
   dataCorrect: boolean = null;
   alertMessage: string = "";
   completedList: boolean[];

   createConceptList() {
       let conceptList: string[] = [];
       for (let concept in this.completedHash) {
           conceptList.push(concept);
       }
       conceptList = this.shuffleArray(conceptList);
       return conceptList;
   }

   createImplementationList() {
       let implementationList: string[] = [];
       for (let concept in this.completedHash) {
           implementationList.push(this.completedHash[concept]);
       }
       implementationList = this.shuffleArray(implementationList);
       return implementationList;
   }

   shuffleArray(array: Array<string>) {
       if (array.length <= 1)
       {
           return array;
       }
       for (let i = 0; i < array.length; i++) {
           const randomIndex = Math.floor(Math.random() * (i + 1));
           [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
       }
       return array;
   }

   isMatch() {
       console.log(this.completedHash[this.oldConcept]);
       if (this.completedHash[this.oldConcept] === this.oldImplementation) {
           //match! success!
           this.toastSuccess();
           this.conceptList.splice(this.conceptList.indexOf(this.oldConcept), 1);
           this.implementationList.splice(this.implementationList.indexOf(this.oldImplementation), 1);
       }
       else {
           //not match! bzz bzz!
           this.toastFailure();
       }
       this.implementClick = false;
       this.conceptClick = false;
       this.borderHighlight = null;
       this.borderAnswerHighlight = null;
       this.oldConcept = null;
       this.oldImplementation = null;
   }

   isSameConcept(currentConcept: string) {
       this.conceptClick = true;
       let newConcept: string = currentConcept;
       if (newConcept === this.oldConcept) {
           this.oldConcept = null;
           this.borderHighlight = null;
           this.borderAnswerHighlight = null;
       }
       else
       {
           this.oldConcept = newConcept;
           this.borderHighlight = this.conceptList.indexOf(newConcept);
       }
       if (this.implementClick === true && this.conceptClick === true) {
           this.isMatch();
       }
   }

   isSameImplementation(currentImplementation: string) {
       this.implementClick = true;
       let newImplement: string = currentImplementation;
       if (newImplement === this.oldImplementation) {
           this.oldImplementation = null;
           this.borderHighlight = null;
           this.borderAnswerHighlight = null;
       }
       else {
           this.oldImplementation = newImplement;
           this.borderAnswerHighlight = this.implementationList.indexOf(newImplement);
       }
       if (this.implementClick === true && this.conceptClick === true) {
           this.isMatch();
       }
   }

   toastSuccess() {
       this.alertMessage = "CORRECT!";
       this.dataCorrect = true;
       setTimeout(() => {
           this.dataCorrect = null;

       }, 2000);
   }

   toastFailure() {
       this.alertMessage = "WRONG!";
       this.dataCorrect = false;
       setTimeout(() => {
           this.dataCorrect = null;
       }, 2000);
   }

   resetGame() {
       this.oldConcept = null;
       this.oldImplementation = null;
       this.conceptList = this.createConceptList();
       this.implementationList = this.createImplementationList();
   }
}