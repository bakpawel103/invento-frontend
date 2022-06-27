import { Component } from "@angular/core";
import { EWGlobal } from "../models";

declare const EWGlobal: EWGlobal;

@Component({
  selector: "ew-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Magazine";
  version = "0.0.1";

  constructor() {
    console.log(EWGlobal);
  }
}
