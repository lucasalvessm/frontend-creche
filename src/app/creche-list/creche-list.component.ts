import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrecheService } from '../commons/service/creche.service';
import { ToastService } from '../components/toast/toast.service';
import { CrecheLight } from '../commons/model/creche.light.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrecheDetailComponent } from '../creche-detail/creche-detail.component';

@Component({
  selector: 'app-creche-list',
  templateUrl: './creche-list.component.html',
  styleUrls: ['./creche-list.component.less']
})
export class CrecheListComponent implements OnInit {

  public creches: CrecheLight[];
  openDetail: Function;
  @ViewChild('app-creche-detail', { static: false }) el: ElementRef;

  constructor(
    private crecheService: CrecheService,
    private toastService: ToastService,
    private modalService: NgbModal,
  ) {
    this.openDetail = this.openCrecheDetail.bind(this);
  }

  ngOnInit() {
    this.crecheService
      .list()
      .subscribe(creches => {
        this.creches = creches;
      },
        error => {
          this.toastService.error(`CrecheList not listed successfully. Error: ${error.message}`)
        });
  }

  openCrecheDetail = (crecheLight: CrecheLight) => {
    this.crecheService
      .detail(crecheLight.id)
      .subscribe(creche => {
        const modalRef = this.modalService.open(CrecheDetailComponent, { size: 'lg' });
        modalRef.componentInstance.creche = creche;
      },
        error =>
          this.toastService.error(`Creche not detailed successfully. Error: ${error.message}`)
      );

  }

}
