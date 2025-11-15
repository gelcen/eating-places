import { Component, signal } from '@angular/core';
import { Layout } from './shared/layout/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Layout]
})
export class App {
  protected readonly title = signal('eating-places');
}
