import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrecheService } from '../commons/service/creche.service';
import { Creche } from '../commons/model/creche.model';
import { ToastService } from '../components/toast/toast.service';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';


@Component({
  selector: 'app-creche-insert',
  templateUrl: './creche-insert.component.html',
  styleUrls: ['./creche-insert.component.less']
})
export class CrecheInsertComponent implements OnInit {

  handleCallback: Function;

  images: string[] = [];

  crecheForm = this.fb.group({
    address: ['', Validators.required],
    city: [''],
    value: ['', Validators.required],
    age: [''],
    owner: ['', Validators.required],
    furnished: [''],
    garage: [''],
    toilets: [''],
    neighborhood: [''],
    dorms: ['']
  });

  constructor(
    private fb: FormBuilder,
    private crecheService: CrecheService,
    private toastService: ToastService
  ) {
    this.handleCallback = this.getImages.bind(this);
  }

  ngOnInit() {
  }

  onSubmit = (upload: FileUploadComponent) =>
    this.crecheService
      .insert([Creche.fromForm(this.crecheForm.value, this.images)])
      .subscribe(
        () => {
          this.crecheForm.reset();
          upload.resetSelection();
          this.toastService.success('Creche inserted successfully');
        },
        res => this.toastService.error(`Creche not inserted successfully. Error: ${res.error.message}`)
      );

  getImages = (images: string[]) => this.images = images;

}
