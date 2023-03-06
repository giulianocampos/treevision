import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {

  public favoritesForm: FormGroup;

  constructor(
    private formBuider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.favoritesForm = this.formBuider.group({
      name: [],
      notes: []
    });
  }

  save() {
    console.log(this.favoritesForm.value);
  }
}
