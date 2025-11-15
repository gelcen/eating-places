export class Place {
  id!: number;
  name!: string;
  hasDelivery!: boolean;
  isFastFood!: IsFastFood;
  isCheap!: boolean;
}

export class PlacesFilter {
  hasDelivery?: boolean;
  isFastFood?: IsFastFood;
  isCheap?: boolean;
  excludePlaces: number[] = [];
}

export type IsFastFood = 'yes' | 'no' | 'both';
