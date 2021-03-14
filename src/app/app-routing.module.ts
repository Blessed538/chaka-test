import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Page_one/header/header.component';
import { CenterComponent } from './Page_one/center/center.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: 'center', component: CenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
