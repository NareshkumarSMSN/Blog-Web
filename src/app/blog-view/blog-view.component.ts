import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css'
})
export class BlogViewComponent {

}
