import { Component, Input } from '@angular/core';
import { Meeting } from '../model/meeting';
import { MeetinghttpService } from '../service/meetinghttp.service';

@Component({
  selector: 'app-meetingedit',
  standalone: false,
  
  templateUrl: './meetingedit.component.html',
  styleUrl: './meetingedit.component.css'
})
export class MeetingeditComponent {

    @Input()
    meeting:Meeting

  constructor(private meetservice:MeetinghttpService) {
    this.meeting = {
      mid: "",
      time: "", 
      projectId: "",
    }
  }

  onSubmit(){

    this.meetservice.updateMeeting(this.meeting).subscribe((response: any)=>console.log(response));
      
  }

}
