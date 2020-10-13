import { Component, OnInit } from '@angular/core';
import { Data2, Parent } from '../interfaces/data2';
import { AwwService } from '../aww.service';

@Component({
  selector: 'app-aww-view',
  templateUrl: './aww-view.component.html',
  styleUrls: ['./aww-view.component.css']
})
export class AwwViewComponent implements OnInit {

    parent : Parent;

  constructor(private awwService : AwwService) { }

  ngOnInit(): void {
    this.awwService.getAww().subscribe(
      (data:Parent)=>
        this.parent = data

    )
  }

}
