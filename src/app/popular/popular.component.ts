import { Component, inject } from '@angular/core';
import { GameInterface } from './game/game-interface';
import { GameServiceService } from './game/game-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  
  gameInterfaceList : GameInterface[] = [];
  gameService: GameServiceService = inject(GameServiceService);
  constructor() {
    this.gameInterfaceList = this.gameService.getGames();
  }

}