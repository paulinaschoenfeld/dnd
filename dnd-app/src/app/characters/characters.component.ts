import { Character } from './../shared/models/Character';
import { Component, OnInit } from '@angular/core';
import { characters } from '../sample/sampleCharacters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = characters;

  constructor() { }

  ngOnInit() {
    console.log(this.characters);
  }

}
