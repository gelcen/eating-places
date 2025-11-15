import { Component } from "@angular/core";
import { RandomPlace } from "../../places/random-place/random-place";
import { List } from "../../places/list/list";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
  imports: [RandomPlace, List]
})
export class Layout {
}