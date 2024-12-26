import { Component, EventEmitter, Output } from '@angular/core';
import { Meeting } from '../model/meeting';
import { MeetinghttpService } from '../service/meetinghttp.service';

@Component({
  selector: 'app-create-meeting',
  standalone: false,
  
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})

export class CreateMeetingComponent {


  constructor(private meetingservice:MeetinghttpService) {
    this.meeting = {
      mid: "",
      time: "",
      projectId: ""
    }
  }

  meeting:Meeting

  onSubmit(){
    //let employeeReturn = this.empservice.getEmployeeById(this.meeting.eid)
    //console.log(employeeReturn);
    this.meetingservice.addMeeting(this.meeting).subscribe((response: any)=>console.log(response));
      
    // this.empadded.emit(this.emp)
    // console.log(this.emp);
    //let myId = employees[employees.length-1].eid + 1;
    //employees.push({eid:myId, ename: this.emp.ename, password: this.emp.password, email:this.emp.email, phone: this.emp.phone, address:{country:this.emp.address.country}});
  }

  //random question but since its displaying based on the employee in data.ts, could we not just push and edit directly from the saveEmployee function in empform? 

}
