import { Component, Input } from '@angular/core';
import { MeetingInterface } from './meeting-interface';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  @Input() meetingInterface!: MeetingInterface;
}
