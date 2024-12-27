import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';

@Component({
  selector: 'app-create-client',
  standalone: false,
  
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})

export class CreateClientComponent {


  constructor(private clientservice:ClienthttpService) {
    this.client = {
      eid: "",
      ename: "", 
      email: "",
      phone: "",
      company: "",
      address: {
        city: "",
        country: "",
        zipcode:""
      },
    }
  }

  client:Client

  onSubmit(){
    this.clientservice.addClient(this.client).subscribe((response: any)=>console.log(response));
      
  }


}
