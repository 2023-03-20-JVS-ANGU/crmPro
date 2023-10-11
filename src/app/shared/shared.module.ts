import {NgModule} from '@angular/core';
import {TotalPipe} from "./pipes/total.pipe";


@NgModule({
  declarations: [TotalPipe],
  imports: [],
  exports: [TotalPipe]
})
export class SharedModule {
}
