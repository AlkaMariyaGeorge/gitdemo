import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {
   @Input() message : string;
 // heading:string="Received from Child";
 // @Output() headingEvent= new EventEmitter<string>();
  constructor() { }
 
  ngOnInit() {
  }
sendMessage(){
  //this.headingEvent.emit(this.heading);
}
}
