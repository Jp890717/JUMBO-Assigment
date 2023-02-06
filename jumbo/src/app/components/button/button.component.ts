import {Component, Input, OnInit} from '@angular/core';

export type ButtonTypesInterface = 'btn-primary' | 'btn-secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnClass: ButtonTypesInterface = 'btn-primary';
  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
