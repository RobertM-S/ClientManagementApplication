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
    projectId: "",
    }
  }

  project:Project

  onSubmit(){
    //let employeeReturn = this.empservice.getEmployeeById(this.project.eid)
    //console.log(employeeReturn);
    this.projectservice.addProject(this.project).subscribe((response: any)=>console.log(response));
      
    // this.empadded.emit(this.emp)
    // console.log(this.emp);
    //let myId = employees[employees.length-1].eid + 1;
    //employees.push({eid:myId, ename: this.emp.ename, password: this.emp.password, email:this.emp.email, phone: this.emp.phone, address:{country:this.emp.address.country}});
  }

  //random question but since its displaying based on the employee in data.ts, could we not just push and edit directly from the saveEmployee function in empform? 

}
