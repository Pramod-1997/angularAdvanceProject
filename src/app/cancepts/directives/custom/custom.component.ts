import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { PermissionDirective } from '../permission.directive';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [HighlightDirective,PermissionDirective],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

}
