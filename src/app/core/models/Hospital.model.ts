export class Hospital{
    hospitalId:             number;
    hospitalName:           string;
    hospitalAddress:        string;
    hospitalCity:           string;
    hospitalContactNo:      string;
    hospitalOwnerName:      string;
    hospitalOwnerContactNo: string;
    hospitalEmailId:        string;
    userName:               string;
    password:               string;

    constructor(){
        this.hospitalId=0;
        this.hospitalAddress='';
        this.hospitalCity='';
        this.hospitalContactNo='';
        this.hospitalEmailId='';
        this.hospitalName='';
        this.hospitalOwnerName='';
        this.hospitalOwnerContactNo='';
        this.userName='';
        this.password='';
    }
}

export interface ApiResponseModel {
    message: string,
    result:boolean,
    data:any
}