import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  title = "Welcome to sample sales data dashboard";
  description = "This page was created using angular and concepts of component were used";
}
