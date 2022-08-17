import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EditOrCreateComponent } from './edit-or-create/edit-or-create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'edit/:id',
    component: EditOrCreateComponent
  },
  {
    path: 'create',
    component: EditOrCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule {}
