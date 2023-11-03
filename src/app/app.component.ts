import { Component, OnInit } from '@angular/core';

declare function themeJS(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '360construcionesFrontend';

  ngOnInit(): void {

    themeJS();

  }
}
