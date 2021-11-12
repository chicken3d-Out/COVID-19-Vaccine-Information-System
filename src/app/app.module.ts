import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { OverviewComponent } from './admin/overview/overview.component';
import { VaccineRecipientComponent } from './admin/vaccine-recipient/vaccine-recipient.component';
import { FirstdoseComponent } from './admin/firstdose/firstdose.component';
import { SeconddoseComponent } from './admin/seconddose/seconddose.component';
import { VaccineComponent } from './admin/vaccine/vaccine.component';
import { VaccineAdministratorComponent } from './admin/vaccine-administrator/vaccine-administrator.component';
import { AddVaccineRecipientComponent } from './admin/vaccine-recipient/add-vaccine-recipient/add-vaccine-recipient.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    DashboardComponent,
    OverviewComponent,
    VaccineRecipientComponent,
    FirstdoseComponent,
    SeconddoseComponent,
    VaccineComponent,
    VaccineAdministratorComponent,
    AddVaccineRecipientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},//change the path later to ''
      {path: 'admin-login', component: AdminLoginComponent},
      {path: 'dashboard', component: DashboardComponent, children: [
          { path: 'dashboard/overview', component: OverviewComponent },
          { path: 'dashboard/recipient', component: VaccineRecipientComponent },
          { path: 'dashboard/first-dose', component: FirstdoseComponent },
          { path: 'dashboard/second-dose', component: SeconddoseComponent },
          { path: 'dashboard/vaccine', component: VaccineComponent },
          { path: 'dashboard/vaccine-administrator', component: VaccineAdministratorComponent },
          { path: '', redirectTo: 'dashboard/overview', pathMatch: 'full' },

          //Vaccine Recipient Paths
          { path: 'dashboard/recipient/add-vaccine-recipient', component: AddVaccineRecipientComponent },
      ], 
    canActivate: [AuthGuard]}//path here os 'dashboard'
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
