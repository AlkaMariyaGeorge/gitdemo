import { Router } from '@angular/router';
import { LoadingService } from './../services/loading.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  collection = [];
  errorMessage = null;
  constructor(private usersService: UsersService, private loadingService: LoadingService,
    private router:Router) { }

  ngOnInit() {
  }
  usersDetail() {
    this.loadingService.show();
    this.usersService.getData().subscribe((response: any) => {
      this.loadingService.hide();
      this.collection=response.data;

    },
    (error:any)=>{
      this.loadingService.hide();
      console.log(error);
     
      this.router.navigate(['login']);
     
    });
  }
}
