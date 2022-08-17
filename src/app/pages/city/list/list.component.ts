import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityList } from 'src/app/core/models/interfaces/City';
import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public cityList: CityList = [];
  public loading: boolean = true;

  constructor(
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.cityService.getList().subscribe({
      next: (res) => {
        this.cityList = res;
        this.loading = false;
      },
      error: (err) => console.error(err)
    });
  }

  public handleDelete(id: number): void {
    this.loading = true;
    this.cityService.deleteById(id).subscribe({
      next: () => this.init(),
      error: (err) => console.error(err),
    });
  }

  public handleEdit(id: number): void {
    console.log('fglfdls');
    this.router.navigate(['city', 'edit', id.toString()]);
  }

}
