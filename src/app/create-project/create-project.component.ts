import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../model/project';
import { ProjecthttpService } from '../service/projecthttp.service';

@Component({
  selector: 'app-create-project',
  standalone: false,
  
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})

export class CreateProjectComponent {


  constructor(private projectservice:ProjecthttpService) {
    this.project = {
    pid: "",
    pname: "",
    description: "",
    clientId: "",
    }
  }

  project:Project

  onSubmit(){
    this.projectservice.addProject(this.project).subscribe((response: any)=>console.log(response));
  }

}
