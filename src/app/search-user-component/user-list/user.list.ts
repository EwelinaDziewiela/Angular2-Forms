import { Component, Input } from '@angular/core';
import { User } from '../single-user/user';

@Component({
  selector: 'user-list',
  templateUrl: 'user.list.html',
  styleUrls: ['user.list.sass']
})

export class UserList {
  @Input()
  userList: Array<User>;

}


