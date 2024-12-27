import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';

@Component({
  selector: 'app-clientedit',
  standalone: false,
  
  templateUrl: './clientedit.component.html',
  styleUrl: './clientedit.component.css'
})

export class ClienteditComponent {

    @Input()
    client:Client

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

  onSubmit(){
    this.clientservice.updateClient(this.client).subscribe((response: any)=>console.log(response));
  }
}
