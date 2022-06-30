import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ew-header",
  templateUrl: "./ew-header.component.html",
  styleUrls: ["./ew-header.component.scss"],
})
export class EwHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
