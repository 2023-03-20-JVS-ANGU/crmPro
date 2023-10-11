import {Component, OnInit} from '@angular/core';
import {Client} from "../../../core/interfaces/client";
import {ClientsService} from "../../services/clients.service";


@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit { //

  headers: string[] = ['name','tva' , 'status', 'totalHorsTax', 'totalWithTax', 'feedback', 'actions'];
  clients: Client[] = [];
  reponse: number = 0;
  constructor(private clientsService: ClientsService) {
  }
  ngOnInit() {
    this.clientsService.getAllClients().subscribe({
      next: (clients: Client[]) => {
        console.log('next',clients);
        this.clients = clients;
      },
      error: (error: string) => console.log('error', error),
      complete: () => console.log('fini')
    });
  }
  // calculateTotalTTC(client: Client): number | null {
  //   console.log('salut');
  //   if(client.totalHorsTax !== null) {
  //     this.reponse = client.totalHorsTax + (client.totalHorsTax * client.tva / 100);
  //     return this.reponse;
  //   }
  //   return null
  // }
}

