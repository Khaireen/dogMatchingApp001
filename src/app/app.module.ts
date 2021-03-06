import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { UserDetailFormComponent } from './forms/user-detail-form/user-detail-form.component';
import { AddDogFormComponent } from './forms/add-dog-form/add-dog-form.component';
import { MainGalleryViewComponent } from './views/main-gallery-view/main-gallery-view.component';
import { FavouritesGalleryViewComponent } from './views/favourites-gallery-view/favourites-gallery-view.component';
import { DogInfoViewComponent } from './views/dog-info-view/dog-info-view.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { EntryScreenViewComponent } from './views/entry-screen-view/entry-screen-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserDetailFormComponent,
    AddDogFormComponent,
    MainGalleryViewComponent,
    FavouritesGalleryViewComponent,
    DogInfoViewComponent,
    SignupFormComponent,
    EntryScreenViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login-form',
        component: LoginFormComponent
      },
      {
        path: 'signup-form',
        component: SignupFormComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    UserDetailFormComponent
  ]
})
export class AppModule { }
