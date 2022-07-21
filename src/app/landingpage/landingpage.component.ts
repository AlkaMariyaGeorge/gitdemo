import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { adjustBlueprintForNewNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.sass']
})
export class LandingpageComponent implements OnInit {
  heading: any;
  title = "Welcome to Angular demo project !";
  fontColor = 'blue';
  canClick = false;
  message = 'Alert message';
  //data = 'parentchild';
  inputText: string = '';
  show: boolean = true;
 fontSize:number=16;
  constructor(private authService:AuthService) {
  }

  ngOnInit() {
  }


  sayMessage() {
    alert(this.message);
  }
  onSubmit(passingData) {
    this.inputText = passingData.value;
  }
  destroy() {
    this.show = false;
  }

  receiveMessage($event) {
    this.heading = $event;
  }
  loggedOut(){
this.authService.logOut();
  }
}
