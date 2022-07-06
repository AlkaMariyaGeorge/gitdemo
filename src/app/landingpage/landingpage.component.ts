import { Component, OnInit } from '@angular/core';
import { adjustBlueprintForNewNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.sass']
})
export class LandingpageComponent implements OnInit {
  heading: any;

  constructor() { }

  ngOnInit() {
  }
title="Welcome to Angular demo project !";
fontColor= 'blue';
canClick=false;
message='Alert message';
data='parenttochild';

sayMessage(){
  alert(this.message);
}

receiveMessage($event){
this.heading=$event;
}
}
