import { user_interface } from './../interfaces/common.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchUser'})

export class SearchPipe implements PipeTransform {

    transform(allUsers : user_interface[], searchText: string): any[] {
        if (allUsers.length) {
            return allUsers.filter(v => v.name.toLowerCase().includes(searchText.toLowerCase()))
        }
    }
}