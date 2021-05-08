import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'CORONA HELPER SERVICE';
constructor(private router:Router){

}

  getPlazma(){
    this.router.navigateByUrl("/plazma")
    console.log("Plazama page will be clicked");
  }

  ngOnInit() {
  }

}
