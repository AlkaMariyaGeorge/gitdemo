import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.sass']
})
export class TwowayBindingComponent implements OnInit {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  inc() {
    this.resize(+1);
  }
  dec() {
    this.resize(-1);
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
