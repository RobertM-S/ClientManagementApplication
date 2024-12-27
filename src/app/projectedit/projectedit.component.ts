import { Component, Input } from '@angular/core';
import { Project } from '../model/project';
import { ProjecthttpService } from '../service/projecthttp.service';

@Component({
  selector: 'app-projectedit',
  standalone: false,
  
  templateUrl: './projectedit.component.html',
  styleUrl: './projectedit.component.css'
})
export class ProjecteditComponent {


  @Input()
  project:Project

  constructor(private projectservice:ProjecthttpService) {
    this.project = {
      pid: "",
      pname: "", 
      description: "",
      clientId: ""
    }
  }

  onSubmit(){

    console.log(this.project);
    this.projectservice.updateProject(this.project).subscribe((response: any)=>console.log(response));

  }


}
