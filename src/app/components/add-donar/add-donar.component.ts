import { Component, OnInit } from '@angular/core';
import { HttpClientService} from 'src/app/services/http-client.service';
import {FireServiceService} from '../../services/fire-service.service';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-add-donar',
  templateUrl: './add-donar.component.html',
  styleUrls: ['./add-donar.component.css']
})
export class AddDonarComponent implements OnInit {

  user: Employee = new Employee();

  constructor(
    private httpClientService: HttpClientService,
    private fireServiceService:FireServiceService
  ) { }

 

createEmployees(){
  console.log("Employee will be created");
  this.fireServiceService.createEmployees(this.user);
}
  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}
