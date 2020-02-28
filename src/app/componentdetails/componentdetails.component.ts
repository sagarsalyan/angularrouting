import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-componentdetails',
  template: `
    <p>
      componentdetails works!
    </p>
    <h3>You selected {{this.deptId}}</h3>
  `,
  styles: []
})
export class ComponentdetailsComponent implements OnInit {
  public deptId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId=id;
  }

}
