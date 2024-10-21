import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employee-detail/:id',
    loadChildren: () => import('./employee-detail/employee-detail.module').then(m => m.EmployeeDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeePageModule),
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }