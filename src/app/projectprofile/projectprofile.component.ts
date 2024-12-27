import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetinghttpService } from '../service/meetinghttp.service';
import { ProjecthttpService } from '../service/projecthttp.service';
import { Meeting } from '../model/meeting';
import { Project } from '../model/project';

@Component({
  selector: 'app-projectprofile',
  standalone: false,
  
  templateUrl: './projectprofile.component.html',
  styleUrl: './projectprofile.component.css'
})
export class ProjectprofileComponent {
  meeting:Meeting[];
  project:Project;
  editVisible = false;
  constructor(private route:ActivatedRoute, private meet :MeetinghttpService,
  private router:Router, private pro:ProjecthttpService) {
  this.meeting = [{mid:'',time:'',projectId:''}]
  this.project = {pid:'', pname: '', description: '', clientId: ''}
  }

  delete(meeting:any){
    this.meet.deleteMeeting(meeting.id).subscribe(response => console.log(response));
  }

  edit(){
    this.editVisible = !this.editVisible;
  }

 // localhost:4200/projects/1
  ngOnInit(): void {
  this.route.params.subscribe(data => {
    console.log(data['id'])
    this.project.pid = data['id']
    this.pro.getProjectsById(data['id'])
    .subscribe(project => this.project = project);
  })
  this.route.params.subscribe(mdata => {
    this.meet.getMeetingsByProjectId(mdata['id'])
    .subscribe(meeting => this.meeting = meeting);
  })
  }
}
