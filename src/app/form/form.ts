import { Component } from '@angular/core';
import { Hero } from './hero';
import { FormInForm } from './forminform/forminform'

@Component ({
  moduleId: "123",
  selector: 'hero-form',
  templateUrl: 'form.html',
  styleUrls: ['form.sass']
})

export class HeroForm {
  powers = ["Genius", "Super Flexible", "Telekinesis", "Weather Changer"];
  model = new Hero(33, "MissE", this.powers[0], "Elle F");
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}

