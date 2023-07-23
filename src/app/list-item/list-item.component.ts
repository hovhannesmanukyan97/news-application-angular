import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class ListItemComponent {

  @Input() title!: string;
  @Input() id!: string;
}
