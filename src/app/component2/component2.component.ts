import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class COmponent2Component implements OnInit {


  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"MongoDB"},
    {"id":3,"name":"Node"},
    {"id":4,"name":"React"},
    {"id":5,"name":"Bootstrap"}
  ]
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onDeptSelect(department){
    this.router.navigate(['/deptdetails',department.id]);
  }

}
