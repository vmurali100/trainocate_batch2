import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  // get All Users
  getAllUsers() {
    return this._http.get('http://localhost:3000/users');
  }
  // Create A User
  createUser(usr: any) {
    return this._http.post('http://localhost:3000/users/', usr);
  }
  // Update An User

  updateUser(usr: any) {
    return this._http.put('http://localhost:3000/users/' + usr.id, usr);
  }
  // Delete An User
  deleteUser(id: number) {
    return this._http.delete('http://localhost:3000/users/' + id);
  }

  // getCricketDetails() {
  //   let headers = new HttpHeaders()
  //     .set(
  //       'X-RapidAPI-Key',
  //       'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
  //     )
  //     .set('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com');
  //   return this._http.get(
  //     'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  //     { headers }
  //   );
  // }

  getCricketDetails(){
    return this._http.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent')
  }
}
