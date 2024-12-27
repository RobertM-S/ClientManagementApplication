import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjecthttpService {
  url:string = "http://localhost:3000/projects";

  constructor(private http:HttpClient) { }

  getAllProjects():Observable<any> {
    return this.http.get<any>(this.url);
  }

  getProjectsById(eid:number):Observable<Project>{
    return this.http.get<Project>(this.url+'/'+eid);
  }

  getProjectsByClientId(eid:number):Observable<Project[]>{
    return this.http.get<Project[]>(this.url+'?clientId='+eid);
  }
  addProject(project:Project):Observable<Project>{
    project.id = project.pid;
    console.log(project);
    return this.http.post<Project>(this.url, project);
  }

  updateProject(project:Project):Observable<Project>{
    console.log(project);
    console.log(this.url)
    return this.http.put<Project>(this.url+'/'+project.id, project);
  }

  deleteProject(eid:number){
    return this.http.delete(this.url+'/'+eid)
  }
 
}
