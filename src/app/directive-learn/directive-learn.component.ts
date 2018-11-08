import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-learn',
  templateUrl: './directive-learn.component.html',
  styleUrls: ['./directive-learn.component.css']
})
export class DirectiveLearnComponent implements OnInit {

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOddEvenNumber() {
    this.onlyOdd = !this.onlyOdd;
  }
}
