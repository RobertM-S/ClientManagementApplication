import { Component } from '@angular/core';
import { Client } from '../model/client';
import { Project } from '../model/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienthttpService } from '../service/clienthttp.service';
import { ProjecthttpService } from '../service/projecthttp.service';

@Component({
  selector: 'app-clientprofile',
  standalone: false,
  
  templateUrl: './clientprofile.component.html',
  styleUrl: './clientprofile.component.css'
})
export class ClientprofileComponent {

  client:Client;
  project:Project[];
  editVisible = false;
  constructor(private route:ActivatedRoute, private cl :ClienthttpService,
  private router:Router, private pro:ProjecthttpService) {
  this.client = {eid:'',ename:'',phone:'',email:'',company:"",address:{country:''}}
  this.project = [{pid:'', pname: '', description: '', clientId: ''}]
  }

  delete(project:any){
    this.pro.deleteProject(project.id).subscribe(response => console.log(response));
  }

  edit(){
    this.editVisible = !this.editVisible;
  }

  viewProjectProfile(id:string|undefined){
    this.router.navigate(['/projects/'+id]); 
  }

 // localhost:4200/clients/1
  ngOnInit(): void {
  this.route.params.subscribe(data => {
    console.log(data['id'])
    this.client.eid = data['id']
    this.cl.getClientsById(data['id'])
    .subscribe(client => this.client = client);
  })
  this.route.params.subscribe(pdata => {
    this.pro.getProjectsByClientId(pdata['id'])
    .subscribe(project => this.project = project);
  })
  }
}
