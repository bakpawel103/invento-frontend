import { Component, Input } from '@angular/core';

@Component({
  selector: 'ew-footer',
  templateUrl: './ew-footer.component.html',
  styleUrls: ['./ew-footer.component.scss']
})
export class EwFooterComponent {
  @Input() version: string;
}
