import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-button',
  templateUrl: './logo-button.component.html',
  styleUrls: ['./logo-button.component.scss'],
})
export class LogoButtonComponent implements OnInit {

  @Input() routerUrl: string;

  constructor() { }

  ngOnInit() {}

}
