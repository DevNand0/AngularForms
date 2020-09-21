import { Component } from '@angular/core';
import { User } from 'tdf/user';
import { EnrollmentService } from 'tdf/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  userModel = new User("Fernanda Inayao","fernanditaaaa1992@gmail.com",5334521,"","morning",true);

  constructor(private _enrollmentService: EnrollmentService){}

  topicHasError=true;
  validateTopic(value){
    if(value===""){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=>console.log("Success",data),
      error=>console.log("Error",error)
    )
  }
}
