import { Component, Input } from '@angular/core';
import { GameInterface } from './game-interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() gameInterface!: GameInterface;
}
