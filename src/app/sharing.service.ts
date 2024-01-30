import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  isLoggedIn: boolean = false;

  val: string = 'Initial Shared Value';

  constructor() { }
}
