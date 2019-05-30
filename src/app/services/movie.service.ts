import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

const API_KEY = "dffef213";
const API_URL = "https://www.omdbapi.com?apikey=" + API_KEY;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  search(ricerca: string) {
    return new Promise((resolve, reject) => {
      let params = new HttpParams()
        .set("s", ricerca);

      this.http.get(API_URL, { params })
        .subscribe((data: any) => {
          if (data.Response == 'True') {
            resolve(data.Search);
          } else {
            reject(data.Error);
          }
        }, (err) => {
          reject("Errore generico");
        });
    });
  }

  get(movieId) {
    return new Promise((resolve, reject) => {
      let params = new HttpParams()
        .set("i", movieId);

      this.http.get(API_URL, { params })
        .subscribe((data: any) => {
          console.log(data);
          if (data.Response != 'False') {
            resolve(data);
          } else {
            reject(data.Error);
          }
        }, (err) => {
          reject("Errore generico");
        });
    });
  }
}
