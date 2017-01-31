import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "multiselect-form",
  templateUrl: "multiselect.form.html",
  styleUrls: ["multiselect.form.sass"],
  encapsulation: ViewEncapsulation.Native
})

export class MultiselectForm {
  selectOption = [new Option("Doctor"), new Option("Policeman"), new Option("Lawyer"), new Option("Journalist"),
                  new Option("Programmer"), new Option("Scientist")];
  targetOption = [];
  selected: any;
  target: any;

  onMove() {

    let temporaryArray = this.selectOption.filter((item: Option)=> {
      if(this.selected.indexOf(item.label) === -1) {
        return false;
      }
      return true;

    });
    this.targetOption = temporaryArray.concat(this.targetOption);
    this.selectOption = this.selectOption.filter((item: Option)=> {
      if(this.selected.indexOf(item.label) === -1) {
        return true;
      }
      return false;
    });
  }
  onRemove() {
    let temporaryArray = this.targetOption.filter((item: Option)=> {
      if(this.target.indexOf(item.label) === -1) {
        return false;
      }
      return true;

    });
    this.selectOption = temporaryArray.concat(this.selectOption);
    this.targetOption = this.targetOption.filter((item: Option)=> {
      if(this.target.indexOf(item.label) === -1) {
        return true;
      }
      return false;
    });

  }
}

export class Option {
  label: string;


  constructor(label) {
    this.label = label;
  }
}
