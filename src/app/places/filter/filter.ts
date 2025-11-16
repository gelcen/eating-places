import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IsFastFood } from '../models/place';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterService } from './filter.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrl: './filter.css',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
})
export class Filter {
  readonly panelOpenState = signal(false);
  readonly filterService = inject(FilterService);

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      isFastFood: new FormControl<IsFastFood | undefined>(undefined),
      isCheap: new FormControl<boolean | undefined>(undefined),
      hasDelivery: new FormControl<boolean | undefined>(undefined),
    });

    this.form.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => this.filterService.filterValue$.next({ excludePlaces: [], ...value }));
  }
}
