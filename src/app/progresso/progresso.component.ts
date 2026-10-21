import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  /* @Input é property binding passando de pai para filho */
  @Input() public progresso = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
