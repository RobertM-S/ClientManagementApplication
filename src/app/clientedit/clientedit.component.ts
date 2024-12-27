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
    //let employeeReturn = this.empservice.getEmployeeById(this.client.eid)
    //console.log(employeeReturn);
    //this.clientservice.addClient(this.client).subscribe((response: any)=>console.log(response));

    this.clientservice.updateClient(this.client).subscribe((response: any)=>console.log(response));
      
    // this.empadded.emit(this.emp)
    // console.log(this.emp);
    //let myId = employees[employees.length-1].eid + 1;
    //employees.push({eid:myId, ename: this.emp.ename, password: this.emp.password, email:this.emp.email, phone: this.emp.phone, address:{country:this.emp.address.country}});
  }

  //random question but since its displaying based on the employee in data.ts, could we not just push and edit directly from the saveEmployee function in empform? 

}
