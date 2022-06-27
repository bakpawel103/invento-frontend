import { AfterViewInit, Component, QueryList, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ew-styleguide-component',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements AfterViewInit {
  title = 'DefaultAngular';
  public categories: QueryList<Element>;
  public sampleFormControl: FormControl = new FormControl('', Validators.required);

  @ViewChild('styleguide', {static: true}) styleguide;

  constructor() {

  }

  ngAfterViewInit(): void {
    // this.categories = this.styleguide.querySelectorAll('.styleguide__headline');
  }
}
