import {Component, EventEmitter, Output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [
    NgStyle
  ],
  templateUrl: './page.html',
  styleUrl: './page.scss'
})
export class Page {
  @Output() color = new EventEmitter();

  public col1: string= "#F34F1C";
  public col2: string= "#7FBC00";
  public col3: string= "#01A6F0";
  public col4: string= "#FFBA01";

  public changeBackground(color: string) {
    this.color.emit(color);
  }
}
