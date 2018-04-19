import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { UserDetailFormComponent } from './forms/user-detail-form/user-detail-form.component';
import { AddDogFormComponent } from './forms/add-dog-form/add-dog-form.component';
import { MainGalleryViewComponent } from './views/main-gallery-view/main-gallery-view.component';
import { FavouritesGalleryViewComponent } from './views/favourites-gallery-view/favourites-gallery-view.component';
import { DogInfoViewComponent } from './views/dog-info-view/dog-info-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserDetailFormComponent,
    AddDogFormComponent,
    MainGalleryViewComponent,
    FavouritesGalleryViewComponent,
    DogInfoViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    UserDetailFormComponent
  ]
})
export class AppModule { }
