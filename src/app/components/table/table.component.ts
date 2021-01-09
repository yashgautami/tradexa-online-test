import { UserService } from './../../shared/services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user_interface } from './../../shared/interfaces/common.interfaces'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() searchText: string = '';
  loading: boolean = false;
  allUsers: user_interface[]  = [];
  error: boolean = false;
  selectedUser: user_interface;
  @Output() userSelect = new EventEmitter<user_interface>();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getUserList().subscribe((res: any) => {
      this.loading = false;
      this.error = false;
      this.allUsers = res;
    }, (err) => {
      this.loading = false;
      this.error = true;
    })
  }

  selectUser(user: user_interface) {
    this.selectedUser = user;
    this.userSelect.emit(this.selectedUser);
  }

}
