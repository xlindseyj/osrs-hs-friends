import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/models/skills.model';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styles: []
})
export class HighscoresComponent implements OnInit {
  @Input() user: string;
  data: ISkills;

  constructor() { }

  ngOnInit(): void {
    this.data.attack = 99;
    this.data.strength = 99;
    this.data.defense = 99;
    this.data.hitpoints = 99;
  }

}
