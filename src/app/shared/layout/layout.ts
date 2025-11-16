import { Component } from "@angular/core";
import { RandomPlace } from "../../places/random-place/random-place";
import { List } from "../../places/list/list";
import { Filter } from "../../places/filter/filter";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
  imports: [RandomPlace, List, Filter]
})
export class Layout {
}