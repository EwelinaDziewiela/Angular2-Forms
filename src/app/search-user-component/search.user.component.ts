import { Component } from '@angular/core';
import { SingleUser } from './single-user/single.user';
import { UserForm } from './user-form/user.form';
import { UserList } from './user-list/user.list';
import { SearchUserService } from './search.user.service';
import { User } from './single-user/user';

@Component({
  selector: 'search-user',
  templateUrl: 'search.user.component.html',
  styleUrls: ['search.user.component.sass']
})

export class SearchUserComponent {
  userList: Array<User>;
  fullUserList: Array<User>;

  constructor() {
    this.userList = [new User("User2", "Firstname2", "Lastname2"), new User("User3", "Firstname3", "Lastname3"),
      new User("User4", "Firstname4", "Lastname4")];
    this.fullUserList  = this.userList.slice();
  }


  onUserSearch(user){
    this.userList = this.fullUserList.filter((item) => {
      return item.firstname.indexOf(user) !== -1;
    })
  }
}
