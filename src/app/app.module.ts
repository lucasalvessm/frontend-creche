import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrecheListComponent } from './creche-list/creche-list.component';
import { CrecheInsertComponent } from './creche-insert/creche-insert.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrecheService } from './commons/service/creche.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './components/toast/toast.component';
import { CrecheCardComponent } from './creche-card/creche-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CrecheDetailComponent } from './creche-detail/creche-detail.component';
import { CrecheDataContentComponent } from './creche-data-content/creche-data-content.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    NgxMaskModule.forRoot(options),
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CrecheListComponent,
    CrecheInsertComponent,
    FileUploadComponent,
    LoginComponent,
    HomeComponent,
    ToastComponent,
    CrecheCardComponent,
    CarouselComponent,
    CrecheDetailComponent,
    CrecheDataContentComponent
  ],
  entryComponents: [
    CrecheDetailComponent
  ],
  providers: [
    CrecheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
