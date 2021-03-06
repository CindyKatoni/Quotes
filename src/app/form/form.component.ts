import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'//Transmit to parent(quote component)

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote=new Quote(0, "", "", "");
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit(this.newQuote);//this triggers addition of the new quote
  }
  constructor() { }

  ngOnInit() {
  }

}
