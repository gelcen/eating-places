import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { PlacesService } from "../services/places.service";
import { AsyncPipe } from "@angular/common";
import { ReplaySubject, startWith, switchMap } from "rxjs";

@Component({
  selector: 'app-random-place',
  templateUrl: './random-place.html',
  styleUrl: './random-place.css',
  imports: [MatButtonModule, MatCardModule, AsyncPipe],
  standalone: true
})
export class RandomPlace {
  private placesService = inject(PlacesService);

  getRandomPlace$ = new ReplaySubject<void>();
  randomPlace$ = this.getRandomPlace$.pipe(
    startWith(null),
    switchMap(() => this.placesService.getRandomPlace({ excludePlaces: [] }))
  );

  onGetPlace(): void {
    this.getRandomPlace$.next();
  }
}
