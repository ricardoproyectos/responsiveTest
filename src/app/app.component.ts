// autor: Ricardo Espinosa
// email: ricardo.espinosa@conextium.com
import { Component } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'practica';
  private _jsonURL = 'http://localhost:4200/assets/cupons.json';
  dataJson: any = {};
  nameUser: string = "";
  active:any = {};
  timeout: any = {};
  out: any = {};


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.dataJson = data;
      this.active = this.dataJson.cupons[0];
      this.timeout = this.dataJson.cupons[1];
      this.out = this.dataJson.cupons[2];
      this.nameUser = this.dataJson.user.name_user;
      console.log(this.dataJson);
     });
   }
  ngOnInit() {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

 



}
