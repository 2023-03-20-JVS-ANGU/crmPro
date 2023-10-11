import {StateClient} from "../enums/state-client";

export interface Client {
  id: number,
  name: string,
  tva: number,
  status: StateClient,
  totalHorsTax: number,
  feedback: string,
}





