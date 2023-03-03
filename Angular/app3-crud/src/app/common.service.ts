import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  // Get All Users
  getAllUsers() {
    return this._http.get('http://localhost:3000/users');
  }
  // Create a User
  createUser(data:any) {
    return this._http.post('http://localhost:3000/users', data);
  }
  // Update a User
  updateUser(id:number, data:any) {
    return this._http.put('http://localhost:3000/users/' + id, data);
  }
  // Delete a User
  deleteUser(id:number) {
    return this._http.delete('http://localhost:3000/users/' + id);
  }

  getCricket(){
    return this._http.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',)
  }
}
