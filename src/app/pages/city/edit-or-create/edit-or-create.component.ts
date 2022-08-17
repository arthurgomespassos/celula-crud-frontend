import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/core/models/interfaces/City';
import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-edit-or-create',
  templateUrl: './edit-or-create.component.html',
  styleUrls: ['./edit-or-create.component.scss']
})
export class EditOrCreateComponent implements OnInit {

  private id?: City['id'];
  public city: Partial<City> = {};
  private mode: 'edit' | 'create' | undefined;

  public cityForm: FormGroup = this.formBuilder.group({
    name: [this.city.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')]],
    population: [this.city.population, [Validators.required, Validators.pattern(/\d+/)]],
    state: [this.city.state, [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')]]
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private cityService: CityService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const mode: string = this.activedRoute.snapshot.url[0].path;
    if (mode !== 'create' && mode !== 'edit') return;
    this.mode = mode;

    if (this.mode == 'edit') {
      this.activedRoute.params.subscribe({
        next: (res) => {
          this.id = parseInt(res['id']);
        },
        error: (err) => console.error(err)
      });

      if (!this.id) return;

      this.cityService.getById(this.id).subscribe({
        next: (res) => {
          this.city = res;
        },
        error: (err) => console.error(err)
      });
    }
  }

  public submitForm(): void {
    if (!this.cityForm.valid) return;
    if (!this.mode) return;

    const cityWithoutId: Pick<City, 'name' | 'population' | 'state'> = this.cityForm.value;
    this.city = { id: this.id, ...cityWithoutId };

    if (this.mode == 'create') {
      delete this.city.id;
    }

    // perform edit or create
    this.cityService[this.mode](<City>this.city).subscribe({
      next: (res) => console.table(res)
    });
  }

  public fieldHasChangedAndHasAnError(field: string): boolean {
    return this.fieldHasError(field) && this.fieldHasChanged(field);
  }

  private fieldHasError(field: string): boolean {
    return !!this.cityForm.get(field)?.errors;
  }

  private fieldHasChanged(field: string): boolean {
    return !!(this.cityForm.get(field)?.touched || this.cityForm.get(field)?.dirty);
  }
}
