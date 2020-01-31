import { Component, OnInit, Input } from '@angular/core';
import { CrecheLight } from '../commons/model/creche.light.model';

@Component({
  selector: 'app-creche-card',
  templateUrl: './creche-card.component.html',
  styleUrls: ['./creche-card.component.less']
})
export class CrecheCardComponent implements OnInit {

  @Input()
  public onDetail: Function;

  @Input()
  public crecheLight: CrecheLight;

  constructor() { }

  ngOnInit() {
  }

  openDetail = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    this.onDetail(this.crecheLight);
  }

}
