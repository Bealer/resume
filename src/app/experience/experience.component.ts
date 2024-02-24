import { Component } from '@angular/core';
import { experience } from '../interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  experience: experience[] = [
    {
      company: 'Church of Jesus Christ of Latter Day Saints',
      position: 'QA Engineer Intern',
      start: new Date('1 May 2020'),
      end: new Date('1 Dec 2020'),
      duties: [],
      achievments: [
        'Created automated tests that covered 40 hrs of manual testing each week',
        'Wrote the team’s first automated UI tests that reported results to Jira board',
        'Maintained documentation on the automated test suite'
      ]
    },
    {
      company: 'Anglepoint',
      position: 'Software Developer III',
      start: new Date('5 May 2021'),
      end: undefined,
      duties: [],
      achievments: [
        'wrote code and stuff'
      ]
    },
  ];

  
  experienceView = this.experience
    .sort((a,b) => b.start.valueOf() - a.start.valueOf())
    .slice(0,3);
}
