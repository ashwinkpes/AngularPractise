import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simpletext',
  templateUrl: './simpletext.component.html',
  styleUrls: ['./simpletext.component.css']
})
export class SimpletextComponent implements OnInit {
 @Input() TotalClicks :number;
  constructor() { }

  ngOnInit() {
  }

}
