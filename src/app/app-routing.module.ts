import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './service/auth.guard';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: 'clients', component:ClientsComponent},
  {path: 'addclient', component:CreateClientComponent, canActivate:[authGuard]},
  //{path: 'add', component:EmpformComponent, canActivate:[authGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'addproject', component:CreateProjectComponent, canActivate:[authGuard]},
  {path: 'addmeeting', component:CreateMeetingComponent, canActivate:[authGuard]},

  //{path: 'profile', component:ProfileComponent},
  {path:'' ,redirectTo:'clients',pathMatch:'full'},
  //{path:'employees/:id', component:ProfileComponent, canActivate:[authGuard],
  //  children:[
  //    {path:'detail', component:ProfiledetailComponent}
  //  ]
  //},
  {path: '**', component:PagenotfoundComponent},  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
