import {Component, EventEmitter, Output, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Page} from './page/page';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Page, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public backgroundColor: string = "";

  public changeBackground(color: string) {
    this.backgroundColor = color;
  }
}
