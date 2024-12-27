import { Component, Input } from '@angular/core';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-client',
  standalone: false,
  
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  editVisible = false;
  @Input()
  client:Client
  constructor(private clientservice:ClienthttpService, private route:ActivatedRoute, private router:Router, public us:UserService,) {
    this.client = {
      eid:"",
      ename: "", 
      company: "",
      email: "",
      phone: "",
      address: {
        country: ''
      }
    }
  }

  delete(client:any){ 
    this.clientservice.deleteClient(client.id).subscribe(response => console.log(response));
  }

  edit(){
    this.editVisible = !this.editVisible;
  }

  viewClientProfile(id:string){
    this.router.navigate([id], {relativeTo:this.route}) 
  }

}
