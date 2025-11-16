import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { PlacesService } from "../services/places.service";
import { AsyncPipe } from "@angular/common";
import { ReplaySubject, startWith, switchMap } from "rxjs";
import { FilterService } from "../filter/filter.service";

@Component({
  selector: 'app-random-place',
  templateUrl: './random-place.html',
  styleUrl: './random-place.css',
  imports: [MatButtonModule, MatCardModule, AsyncPipe],
  standalone: true
})
export class RandomPlace {
  private readonly placesService = inject(PlacesService);
  private readonly filterService = inject(FilterService);

  getRandomPlace$ = new ReplaySubject<void>();
  randomPlace$ = this.getRandomPlace$.pipe(
    startWith(null),
    switchMap(() => this.filterService.filterValue$),
    switchMap((filter) => this.placesService.getRandomPlace(filter))
  );

  onGetPlace(): void {
    this.getRandomPlace$.next();
  }
}
