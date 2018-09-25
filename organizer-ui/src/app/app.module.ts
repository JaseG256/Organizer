import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddUserComponent} from './user/add-user.component';
import { CustomMaterialModule } from './core/material.module';
// import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { TokenStorage } from './core/token.storage';
import { Interceptor } from './core/interceptor';
import { ErrorDialogComponent } from './core/error-dialog.component';
import { UserDetailsComponent } from './user/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UserDetailsComponent,
    LoginComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ErrorDialogComponent, UserService, AuthService, TokenStorage,
  { provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
