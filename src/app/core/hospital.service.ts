import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constant } from './constant/constant';
import { ApiResponseModel, Hospital } from './models/Hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  registerHospital(data:Hospital):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_ENDPOINT+Constant.API_END.ADD_NEW_HOSPITAL,data);
  }



}
