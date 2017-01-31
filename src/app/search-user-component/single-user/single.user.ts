import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'single-user',
  templateUrl: 'single.user.html',
  styleUrls: ['single.user.sass']
})

export class SingleUser {
  @Input() user: User;

}

