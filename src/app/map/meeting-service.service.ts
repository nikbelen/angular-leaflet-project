import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingInterface } from './meeting/meeting-interface';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  meetings: string = '/assets/data/meetings.json';
  constructor(private http: HttpClient) {
  }

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
}
