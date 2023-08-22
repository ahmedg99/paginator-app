import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDevicesListComponent } from './my-devices-list/my-devices-list.component';

const routes: Routes = [{ path: 'list', component: MyDevicesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
