import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'crmpro2';
  age: number = 52;
  bool = true;
  src = "bonjour"
  show: boolean = false;
  taille = 2;
  sidebar: boolean = true;
  showFond(){
    // console.log('clickkkkkkk');
    this.show = true;
  }
  valider(){
    // console.log(this.title);
  }
  ngOnInit() {
    // console.log('initialisé')
    // setTimeout(() => console.log('okkk'), 3000)

    setTimeout(() => {
      // console.log('okkk');
      this.title = "cool";
    }, 3000)
  }
  sidebarToggle(){
    this.sidebar = !this.sidebar;
  }
}
