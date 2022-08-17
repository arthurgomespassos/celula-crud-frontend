import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

// Modules
import { CityRoutingModule } from './city-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { ListComponent } from './list/list.component';
import { EditOrCreateComponent } from './edit-or-create/edit-or-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    EditOrCreateComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CardModule,
  ]
})
export class CityModule {}
