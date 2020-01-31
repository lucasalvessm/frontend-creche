import { Component, OnInit, Input } from '@angular/core';
import { Creche } from '../commons/model/creche.model';

@Component({
  selector: 'app-creche-data-content',
  templateUrl: './creche-data-content.component.html',
  styleUrls: ['./creche-data-content.component.less']
})
export class CrecheDataContentComponent implements OnInit {

  @Input() public creche: Creche;

  constructor() { }

  ngOnInit() {
  }

}
