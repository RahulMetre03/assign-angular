import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  title = "Welcome to xyz data dashboard";
  description = "This page was created using angular and concepts of component was used";
}
