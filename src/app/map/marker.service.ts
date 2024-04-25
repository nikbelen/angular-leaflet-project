import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { GameInterface } from '../popular/game/game-interface';
import { MeetingInterface } from './meeting/meeting-interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  meetings: string = '/assets/data/meetings.json';

  getMeetings(): MeetingInterface[] {
    let meetingsList: MeetingInterface[] = [];
    this.http.get(this.meetings).subscribe((res: any) => {
      for(const meeting of res.meetings){
        // console.log(meeting);
        let m: MeetingInterface = meeting;
        meetingsList.push(m);
      }
    });
    return meetingsList;
  }

  constructor(private http: HttpClient) {
  }

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  makeMeetingMarkers(map: L.Map): void {
    this.http.get(this.meetings).subscribe((res: any) => {
      for(const meeting of res.meetings){
        console.log(meeting);

        const lat = parseFloat(meeting.latitude);
        const lon = parseFloat(meeting.longitude);
        const marker = L.marker([lat, lon]);
        marker.addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      const maxPop = Math.max(...res.features.map(x => x.properties.population), 0);

      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], {
          radius: MarkerService.scaledRadius(c.properties.population, maxPop)
        });
        
        circle.addTo(map);
      }
    });
  }

  centerMap(map: L.Map): void {
    map.setView([48.208, 16.373], 7);
  }
}