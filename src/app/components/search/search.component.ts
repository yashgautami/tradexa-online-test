import { user_interface } from './../../shared/interfaces/common.interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() selectedUser: user_interface;
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchChange(value: string) {
    this.search.emit(value);
  }

}
