import { Subject } from 'rxjs/internal/Subject';
import { LoadingService } from './../services/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {
  isLoading :Subject<boolean> = this.loadingService.isLoading; // linking to the loading observable in the loading service
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
  }

}
