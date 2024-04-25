import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameInterface } from './game-interface';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  games: string = '/assets/data/games.json';
  constructor(private http: HttpClient) {
  }

  getGames(): GameInterface[] {
    let meetingsList: GameInterface[] = [];
    this.http.get(this.games).subscribe((res: any) => {
      for(const meeting of res.games){
        // console.log(meeting);
        let m: GameInterface = meeting;
        meetingsList.push(m);
      }
    });
    return meetingsList;
  }
}
