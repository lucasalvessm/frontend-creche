import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Creche } from '../commons/model/creche.model';
import { Address } from '../commons/model/address.model';

@Component({
  selector: 'app-creche-detail',
  templateUrl: './creche-detail.component.html',
  styleUrls: ['./creche-detail.component.less']
})
export class CrecheDetailComponent implements OnInit {
  @Input() creche: Creche;
  address: Address;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.creche);
    this.address = this.creche.addressInfo ? this.creche.addressInfo : new Address;
  }

}
