import { Component, Input } from '@angular/core';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';

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
  constructor(private clientservice:ClienthttpService) {
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
    // let objindx = this.employees.findIndex(employee=>employee.eid === emp.eid);
    // this.employees.splice(objindx,1)  
    this.clientservice.deleteClient(client.id).subscribe(response => console.log(response));
  }

  edit(){
    this.editVisible = !this.editVisible;
  }

}
