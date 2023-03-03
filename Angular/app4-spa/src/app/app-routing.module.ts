import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModuele),
  },

  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
    // children: [{ path: ':myId', component: ContactdetailsComponent }],
    // { path: '', component: UsersComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'pricing', component: PricingComponent },
  },

  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
