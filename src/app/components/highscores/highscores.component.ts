import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styles: []
})
export class HighscoresComponent implements OnInit {
  @Input() user: string;

  constructor() { }

  ngOnInit(): void {
  }

}
