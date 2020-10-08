import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(
  //   http: HttpClient
  // ) { }

  getHighscores(user): Observable<any> {
    const body = {
      user1: user,
      submit:	'Search'
    };

    return this.http.post<any>('https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal', body);
  }
}
