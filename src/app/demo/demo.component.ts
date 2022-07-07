import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked
,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() message: string = 'hello';
  // heading:string="Received from Child";
  // @Output() headingEvent= new EventEmitter<string>();
  constructor() {
    console.log("Constructor is called!");
    console.log(this.message)
  }

  ngOnChanges(change:SimpleChanges) {
    console.log("ngOnChanges is called!");
    console.log(change);
  }
  ngOnInit() {
    console.log("ngOnInit is called!");
    //console.log(this.message);
  }
 ngDoCheck(){
  console.log("ngDoCheck is called!");
 }
 ngAfterContentInit() {
  console.log("ngAfterContentInit is called!");
   } 
   ngAfterContentChecked() {
    console.log("ngAfterContentChecked is called!");
   }
   ngAfterViewInit() {
    console.log("ngAfterViewInit is called!");
     } 
     ngAfterViewChecked() {
      console.log("ngAfterViewChecked is called!");
       } 
       ngOnDestroy() {
        console.log("ngOnDestroy is called!");
       }
  //sendMessage() {
    //this.headingEvent.emit(this.heading);
  //}
}
