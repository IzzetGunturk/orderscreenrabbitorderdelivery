import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svgicons',
  templateUrl: './svgicons.component.html',
})
export class SvgiconsComponent {
  @Input() selectedSvg!: string;
  @Input() fillColor: string = '#000'; // standard color is #000
  @Input() svgHeight: string = '24px';
  @Input() svgWidth: string = '24px';

  constructor() { }
}
