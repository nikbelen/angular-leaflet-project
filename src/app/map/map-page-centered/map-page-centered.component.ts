import { Component, inject } from '@angular/core';
import { MeetingInterface } from '../meeting/meeting-interface';
import { MeetingServiceService } from '../meeting-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-page-centered',
  templateUrl: './map-page-centered.component.html',
  styleUrl: './map-page-centered.component.css'
})
export class MapPageCenteredComponent {
  meetingInterfaceList : MeetingInterface[];
  meetingService: MeetingServiceService = inject(MeetingServiceService);
  route: ActivatedRoute = inject(ActivatedRoute);
  currentMeeting: MeetingInterface;
  meetingId = -1;
  constructor() {
    let m: MeetingInterface| undefined;
    this.meetingId = Number(this.route.snapshot.params['id']);
    this.meetingInterfaceList = this.meetingService.getMeetings();
    // console.log(this.meetingId)
    // console.log(this.meetingInterfaceList) // тут все хорошо
    m = this.meetingInterfaceList.find(meeting => meeting.id === +this.meetingId)!
    // console.log(this.meetingInterfaceList)
    this.meetingInterfaceList = this.meetingService.getMeetings();
    if(m){
      // console.log(m)
      this.currentMeeting = m;
    }
    else {
      // console.log("array first");
      m = {
        id: this.meetingId,
        name:"",
        numplayers: "string",
        maxplayers: "string",
        photo: "string",
        date: "string",
        description: "string",
        latitude: "61.8",
        longitude: "14.3",
      }
      this.currentMeeting = m;
    }
    // console.log(this.meetingInterfaceList.keys)
  }
}
