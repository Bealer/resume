import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  bio:string = 'After discovering automation, projects I\'ve created are still in use. Creative, outside the-box solutions, with a careful look at the end goal, meet and exceed company needs.'
}
