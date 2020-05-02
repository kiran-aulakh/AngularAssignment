import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  /**
   *
   * @param route : Router
   */
  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack(): void {
      this.route.navigate(['covid/dashboard']);
  }

}
