import {Component} from '@angular/core';
import {FormUser} from './little-form';

@Component({
  selector: "new-ex",
  templateUrl: "new-exercises.html",
  styleUrls: ["new-exercises.sass"]
})

export class NewEx {
  user = new FormUser("Ewelina", "ewelina.dziewiela@gmail.com", 500286502);
  userArray = [];

  onClick() {
    this.userArray.push(this.user);
    console.log(this.userArray);


  }


}

