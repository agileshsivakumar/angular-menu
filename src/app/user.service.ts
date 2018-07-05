import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _isUserLoggedIn = false;
  private _userName = '';
  constructor() {}

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
}
