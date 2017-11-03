import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	name: string;
	age: number;

  constructor() { }

  ngOnInit() {
  }

  logForm() {
  	console.log(`${this.name} is ${this.age} years old`);
  }

}
