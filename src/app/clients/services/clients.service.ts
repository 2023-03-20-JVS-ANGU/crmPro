import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../core/interfaces/client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
 private apiUrl = 'http://localhost:3008/clients';
  constructor(private http: HttpClient) {
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl, client);
  }
  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/${id}`);
  }
}
