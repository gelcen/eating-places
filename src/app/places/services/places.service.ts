import { map, Observable, of, Subject } from "rxjs";
import { Place, PlacesFilter } from "../models/place";
import { Injectable } from "@angular/core";

export interface IPlacesService {
  getPlaces(query: PlacesFilter): Observable<Place[]>;
  getRandomPlace(query: PlacesFilter): Observable<Place>;
}

@Injectable({
    providedIn: 'root'
})
export class PlacesService implements IPlacesService {
  private readonly places: Place[] = [
    {
      id: 1,
      name: 'Столовка (Пельмешка)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 2,
      name: 'Эжегей (столовка)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 3,
      name: 'Тараа (кафе)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: false
    },
    {
      id: 4,
      name: 'Чалама (кафе)',
      hasDelivery: false,
      isFastFood: 'both',
      isCheap: false
    },
    {
      id: 5,
      name: 'Папа Гриль (кафе)',
      hasDelivery: false,
      isFastFood: 'yes',
      isCheap: false
    },
    {
      id: 6,
      name: 'Каннам Чикен (кафе)',
      hasDelivery: true,
      isFastFood: 'yes',
      isCheap: false
    },
    {
      id: 7,
      name: 'NRoom (кафе)',
      hasDelivery: false,
      isFastFood: 'both',
      isCheap: false
    },
    {
      id: 8,
      name: 'Удон (кафе)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: false
    },
    {
      id: 9,
      name: 'Блинаая (столовка)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 10,
      name: 'Мини Кафе (кафе)',
      hasDelivery: true,
      isFastFood: 'no',
      isCheap: false
    },
    {
      id: 11,
      name: 'Аяна Доставка (доставка)',
      hasDelivery: true,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 12,
      name: 'Ханой (кафе)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 13,
      name: 'Мио Пицца (кафе)',
      hasDelivery: true,
      isFastFood: 'yes',
      isCheap: false
    },
    {
      id: 14,
      name: 'Кимчи (кафе)',
      hasDelivery: true,
      isFastFood: 'no',
      isCheap: false
    },
    {
      id: 15,
      name: 'Сеул (кафе)',
      hasDelivery: false,
      isFastFood: 'both',
      isCheap: false
    },
    {
      id: 16,
      name: 'Фьюжн (кафе)',
      hasDelivery: true,
      isFastFood: 'both',
      isCheap: false
    },
    {
      id: 17,
      name: 'Шашлык 17 (столовка)',
      hasDelivery: false,
      isFastFood: 'both',
      isCheap: false
    },
    {
      id: 18,
      name: 'СушиСел (доставка)',
      hasDelivery: true,
      isFastFood: 'yes',
      isCheap: false
    },
    {
      id: 19,
      name: '450C (кафе)',
      hasDelivery: true,
      isFastFood: 'yes',
      isCheap: false
    },
    {
      id: 20,
      name: 'Шашлычная на Калинина за кругом (столовка)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: true
    },
    {
      id: 21,
      name: 'Аджика (кафе)',
      hasDelivery: false,
      isFastFood: 'no',
      isCheap: false
    },
    {
      id: 22,
      name: 'Дон Пельмень (доставка)',
      hasDelivery: true,
      isFastFood: 'no',
      isCheap: true
    },
  ];

  getPlaces(filter: PlacesFilter): Observable<Place[]> {
    var filteredPlaces = this.places;

    if (filter.isFastFood) {
      filteredPlaces = filteredPlaces.filter(x => x.isFastFood === filter.isFastFood);
    }

    if (filter.hasDelivery !== undefined) {
      filteredPlaces = filteredPlaces.filter(x => x.hasDelivery === filter.hasDelivery);
    }

    if (filter.isCheap !== undefined) {
      filteredPlaces = filteredPlaces.filter(x => x.isCheap === filter.isCheap);
    }

    if (filter.excludePlaces.length > 0) {
      filteredPlaces = filteredPlaces.filter(x => !filter.excludePlaces.includes(x.id));
    }

    return of(filteredPlaces);
  }

  getRandomPlace(filter: PlacesFilter): Observable<Place> {
    return this.getPlaces(filter).pipe(
      map(places => places[this.getRandomInt(places.length)])
    );
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}