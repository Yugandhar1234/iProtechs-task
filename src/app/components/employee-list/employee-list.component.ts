import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any;
  public errMsg:string;
  public search:string;

  public searchQuery:string;
  

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    },(err)=>{
      this.errMsg = err;
    });
  }
  /*public serachEmp(){
    this.filteredEmp = this.employees.filter(employee=>{
      return employee.first_name.toLowerCase.toString().startsWith(this.searchQuery.toLowerCase());
    })
  }*/

}
