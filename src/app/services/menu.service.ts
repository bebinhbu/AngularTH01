import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMenuCategorie } from '../interface/IMenuCategorie';

@Injectable()
export class MenuService {

    private _menus : BehaviorSubject<IMenuCategorie[]> = new BehaviorSubject([]);

    get menus()
    {
        return this._menus.asObservable();
    }
    constructor(private httpClient: HttpClient) { }

    getMenus() {
        const url = `https://lexuanquynh.com/foods?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZjRiMzY3OWFjZmY2NTQ1ZmQ0OSIsImlhdCI6MTU0MTc1NTA5OH0.KvtTL9T6AMeSw6r33aqOOBo9yb0iKDE2-1qhVW4lLpo`;
        return this.httpClient.get(url).pipe(map((response: any) => {
          const data = response.rows.map(x => {
            let menu: IMenuCategorie = {
                id : x.id,
                name :  x.name,
                price : x.price,
                picture : x.pictures[0]
            };
            return menu;
          })
          return data;
        }))
          .subscribe((data: any) => {
            this._menus.next(data);
          })
      }
}