import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: 'user.form.html',
  styleUrls: ['user.form.sass']
})

export class UserForm {

  @Output() onSubmit = new EventEmitter();

  searched;

  updateUser(user){
    this.onSubmit.emit(user);
  }
}
