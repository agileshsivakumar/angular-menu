import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private _isUserLoggedIn = false;
  private _userName = '';
  constructor(private http: HttpClient) {}

  public setUserDetails(userName: string) {
    if (userName) {
      this._isUserLoggedIn = true;
      this._userName = userName;
    }
  }

  /**
   * getUserDetails
   */
  public getIsUserLoggedIn() {
    return this._isUserLoggedIn;
  }

  /**
   * getUserName
   */
  public getUserName() {
    return this._userName;
  }

  public authenticateUser(userName: string, password: string) {
    const url = `assets/example.json`;
    this.http.get(url)
    .subscribe(data => {
      console.log(data);
    });
  }
}
