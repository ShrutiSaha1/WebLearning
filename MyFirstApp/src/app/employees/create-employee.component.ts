import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Department} from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //gender = "female";
  depts: Department[] = [
    {id: 1, name: 'IT'},
    {id: 2, name: 'Help desk'},
    {id: 3, name: 'Security'},
    {id: 4, name: 'CSR'}
  ]

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm) : void{
    console.log(empForm.value);
  }
}
