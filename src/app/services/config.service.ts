import { HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

const baseUrlDev:string = "http://localhost:3000";
const baseUrlProdFreezy:string = "http://192.168.178.72:3000";
const baseUrlProdChibi:string = "http://192.168.178.28:3000";
const IsChibi:boolean = false;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl:string = "";
  httpOptionsForJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor() 
  {     
    if(isDevMode())
    {
      this.baseUrl = baseUrlDev;
    }
    else{
      if(!IsChibi)
      {
        this.baseUrl = baseUrlProdFreezy;
      }
      else{
        this.baseUrl = baseUrlProdChibi;
      }    
    }}
}
