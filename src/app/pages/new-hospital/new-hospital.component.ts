import { Component } from '@angular/core';
import { HospitalService } from 'src/app/core/hospital.service';
import { Hospital,ApiResponseModel } from 'src/app/core/models/Hospital.model';


@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css'],
  

})
export class NewHospitalComponent {
  hospitalPath='assets/images/Hospital.jpg';

  public hospitalObj:Hospital= new Hospital();

  constructor(private hospitalService:HospitalService)
  {
    
  }
 
  onRegistration(){
    this.hospitalService.registerHospital(this.hospitalObj).subscribe((res:ApiResponseModel)=>{
      console.log("Response",res);
      if(res.result)
        {
          alert("Registration Successful")
        }else{
          alert(JSON.stringify(res.message))
        }
    },error=>{
      alert(JSON.stringify(error))
    })
  }
}
