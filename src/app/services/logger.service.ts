import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private mainMsg: string;

  constructor() {}

  log(msg: string) {
    if (!environment.production) console.log(msg);
  }
  warn(msg: string) {
    if (!environment.production) console.warn(msg);
  }
  error(msg: string) {
    if (!environment.production) console.error(msg);
  }
}
