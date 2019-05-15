import { Component, OnInit } from '@angular/core';
import { LIST_OF_FISH } from '../list-of-animals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LIST_OF_FISH = LIST_OF_FISH;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  showDetailsFish(animal) {
    this.router.navigate(['/adoption/fish/' + animal.id]);
  }

}
