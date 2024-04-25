import { Component, inject } from '@angular/core';
import { MeetingInterface } from '../meeting/meeting-interface';
import { MeetingServiceService } from '../meeting-service.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent {
  meetingInterfaceList : MeetingInterface[] = [];
  meetingService: MeetingServiceService = inject(MeetingServiceService);
  constructor() {
    this.meetingInterfaceList = this.meetingService.getMeetings();
  }
}