import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../model/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetinghttpService {
  url:string = "http://localhost:3000/meetings";

  constructor(private http:HttpClient) { }

  getAllMeetings():Observable<any> {
    return this.http.get<any>(this.url);
  }

  getMeetingsById(eid:number):Observable<Meeting>{
    return this.http.get<Meeting>(this.url+'/'+eid);
  }

  addMeeting(meeting:Meeting):Observable<Meeting>{
    meeting.id = meeting.mid;
    console.log(meeting);
    return this.http.post<Meeting>(this.url, meeting);
  }

  updateMeeting(meeting:Meeting):Observable<Meeting>{
    console.log(meeting);
    return this.http.put<Meeting>(this.url+'/'+meeting.mid, meeting);
  }

  deleteMeeting(eid:number){
    return this.http.delete(this.url+'/'+eid)
  }
 
}
