import { Component, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { PlacesService } from "../services/places.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: true,
  imports: [MatCardModule, MatListModule, AsyncPipe]
})
export class List { 
  placesService = inject(PlacesService);

  places$ = this.placesService.getPlaces({ excludePlaces: [] });
}