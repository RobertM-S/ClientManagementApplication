import { Component } from '@angular/core';
import { ClienthttpService } from '../service/clienthttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { clients } from '../model/mockClients';

@Component({
  selector: 'app-clients',
  standalone: false,
  
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  constructor(private clientservice:ClienthttpService, private route:ActivatedRoute, private router:Router){}
  clients=clients;

  delete(client:any){
    this.clientservice.deleteClient(client.id).subscribe(response => console.log(response));
  }

  ngOnInit(): void {
    this.clientservice.getAllClients()
    .subscribe(resp => {
      console.log('fetched clients')
      console.log(resp);
      this.clients = resp;
    })
  }
}
