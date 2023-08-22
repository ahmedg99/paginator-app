import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevicesServices {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      authorization: 'Bearer ' + '',
    }),
    withCredentials: true,
  };

  getAllDevices(offset: number, pageSize: number) {
    const url = `http://localhost:8080/api/device/getAllDevices/${offset}/${pageSize}/`;
    return this.http.get(url, this.httpOptions);
  }

  findDevicesByModelAndUser(model: string, offset: number, pageSize: number) {
    const url = `http://localhost:8080/api/device/findDevicesByModelAndUser/${model}/${offset}/${pageSize}`;
    return this.http.get(url, this.httpOptions);
  }
  findDevicesByModel(model: string) {
    const url = `http://localhost:8080/api/device/findDevicesByModel/${model}`;
    return this.http.get(url, this.httpOptions);
  }
}
