import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

import { LoginComponentComponent } from './login-component/login-component.component';

import { RegisterComponentComponent } from './register-component/register-component.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  // {path:'',component:HomeScreenComponent},
 

{path:'LoginComponent',component:LoginComponentComponent},
{path:'RegisterComponent',component:RegisterComponentComponent},
{path : '' , redirectTo : '/LoginComponent' , pathMatch : 'full'},




{
  path: '',
  canActivate: [AuthguardService],
  children: [

    {path:'homePage',component:HomePageComponent}
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
