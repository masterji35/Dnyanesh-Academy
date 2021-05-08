import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-plazma',
  templateUrl: './plazma.component.html',
  styleUrls: ['./plazma.component.css']
})
export class PlazmaComponent implements OnInit {

 
  employees: Employee[];
   
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>{this.employees = response;}
    );
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

}
