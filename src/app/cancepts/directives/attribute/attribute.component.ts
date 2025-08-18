import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {

  isActive = true;
  colorValue = 'red'

}
