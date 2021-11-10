import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'admin-login', component: AdminLoginComponent},
      {path: 'dashboard', component: DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
