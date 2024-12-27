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

    this.meetingservice.addMeeting(this.meeting).subscribe((response: any)=>console.log(response));
  }


}
