import { Injectable } from "@angular/core";
import { PlacesFilter } from "../models/place";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  defaultFilter: PlacesFilter = {
    excludePlaces: []
  };

  filterValue$ = new BehaviorSubject<PlacesFilter>(this.defaultFilter);
}