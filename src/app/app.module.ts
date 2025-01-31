import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, registerLocaleData} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CreateClientComponent } from './create-client/create-client.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteditComponent } from './clientedit/clientedit.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { ProjectprofileComponent } from './projectprofile/projectprofile.component';
import { ProjecteditComponent } from './projectedit/projectedit.component';
import { MeetingeditComponent } from './meetingedit/meetingedit.component';

// @ - decorator

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateClientComponent,
    LogoutComponent,
    CreateMeetingComponent,
    CreateProjectComponent,
    PagenotfoundComponent,
    ClientComponent,
    ClientsComponent,
    FooterComponent,
    ClienteditComponent,
    ClientprofileComponent,
    ProjectprofileComponent,
    ProjecteditComponent,
    MeetingeditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
