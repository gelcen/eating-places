import { Component, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { PlacesService } from "../services/places.service";
import { AsyncPipe } from "@angular/common";
import { Observable, switchMap } from "rxjs";
import { Place } from "../models/place";
import { FilterService } from "../filter/filter.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: true,
  imports: [MatCardModule, MatListModule, AsyncPipe]
})
export class List { 
  private readonly placesService = inject(PlacesService);
  private readonly filterService = inject(FilterService);

  places$: Observable<Place[]>; 

  constructor() {
    this.places$ = this.filterService.filterValue$.pipe(
      switchMap((filter) => this.placesService.getPlaces(filter))
    );
  }
}