import { user_interface } from './../../shared/interfaces/common.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss']
})
export class UserScreenComponent implements OnInit {
  searchText: string = '';
  selectedUser: user_interface;

  constructor() { }

  ngOnInit(): void {
  }

  search(event) {
    this.searchText = event;
  }

  userSelect(user: user_interface) {
    this.selectedUser = user;
  }

}
