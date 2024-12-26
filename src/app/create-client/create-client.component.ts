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
    //let employeeReturn = this.empservice.getEmployeeById(this.client.eid)
    //console.log(employeeReturn);
    this.clientservice.addClient(this.client).subscribe((response: any)=>console.log(response));
      
    // this.empadded.emit(this.emp)
    // console.log(this.emp);
    //let myId = employees[employees.length-1].eid + 1;
    //employees.push({eid:myId, ename: this.emp.ename, password: this.emp.password, email:this.emp.email, phone: this.emp.phone, address:{country:this.emp.address.country}});
  }

  //random question but since its displaying based on the employee in data.ts, could we not just push and edit directly from the saveEmployee function in empform? 

}
