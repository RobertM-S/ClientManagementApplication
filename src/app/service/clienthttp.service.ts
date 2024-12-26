import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClienthttpService {
  url:string = "http://localhost:3000/clients";

  constructor(private http:HttpClient) { }

  getAllClients():Observable<any> {
    return this.http.get<any>(this.url);
  }

  getClientsById(eid:number):Observable<Client>{
    return this.http.get<Client>(this.url+'/'+eid);
  }

  addClient(client:Client):Observable<Client>{
    client.id = client.eid;
    console.log(client);
    return this.http.post<Client>(this.url, client);
  }

  updateClient(client:Client):Observable<Client>{
    console.log(client);
    return this.http.put<Client>(this.url+'/'+client.eid, client);
  }

  deleteClient(eid:number){
    return this.http.delete(this.url+'/'+eid)
  }
 
}
