import { Component, OnInit, Input } from '@angular/core';
import { Data2 } from '../interfaces/data2';

@Component({
  selector: 'app-aww-detail-view',
  templateUrl: './aww-detail-view.component.html',
  styleUrls: ['./aww-detail-view.component.css']
})
export class AwwDetailViewComponent implements OnInit {

  @Input() data2: Data2;

  constructor() { }

  ngOnInit(): void {
  }

}
