import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId:any;
  public selectedEmployee:any;
  public errorMessage:string;
  constructor(private activatedRoute:ActivatedRoute,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.employeeId = Number(param.get('id'));
    });

    this.employeeService.getAllEmployees().subscribe((data) => {
      this.selectedEmployee = data.find((employee) => {
      
        return employee.id === this.employeeId;
      });
    },(err) => {
      this.errorMessage = err;
    });

  }

}
