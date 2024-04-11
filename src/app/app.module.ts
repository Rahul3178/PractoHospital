import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HospitalListComponent } from './pages/hospital-list/hospital-list.component';
import { NewHospitalComponent } from './pages/new-hospital/new-hospital.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DashboardComponent,
    HomeComponent,
    HospitalListComponent,
    NewHospitalComponent,
    PatientListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
