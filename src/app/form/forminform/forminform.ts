import { Component } from '@angular/core';

@Component({
  selector: "forminform",
  templateUrl: "forminform.html",
  styleUrls: ["forminform.sass"]
})

export class FormInForm {
  girl = new User("Ewelina", 33, ["2"]);
  boy = new User("Mateusz", 31, ["1", "2"]);
}

export class User {

  constructor(
    public name: string,
    public age: number,
    public gender: Array<string>
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

}

