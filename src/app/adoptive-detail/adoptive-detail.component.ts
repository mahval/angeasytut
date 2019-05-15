import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LIST_OF_FISH } from '../list-of-animals';

@Component({
  selector: 'app-adoptive-detail',
  templateUrl: './adoptive-detail.component.html',
  styleUrls: ['./adoptive-detail.component.css']
})
export class AdoptiveDetailComponent implements OnInit {
  selectedTypeOfAnimal;
  selectedId;
  adoptivesList;

  selectedAnimal;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.selectedTypeOfAnimal = this.route.snapshot.paramMap.get('animal');
    this.selectedId = +this.route.snapshot.paramMap.get('id');

    if (this.selectedTypeOfAnimal === 'fish') {
      this.adoptivesList = LIST_OF_FISH;
    console.log("adoptivesList: ", this.adoptivesList)

    }

    console.log("selectedTypeOfAnimal: ", this.selectedTypeOfAnimal)
    console.log("selectedId: ", this.selectedId)

    // TODO: Using the selectedId from the route - find the correct fish in the adoptivesList list!
    // Remember: The fish's ID needs to be the same as selectedId.
    this.selectedAnimal = this.adoptivesList.find(e => e.id === this.selectedId);
  }

  ngOnInit() {
  }

}
