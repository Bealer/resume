import { Component } from '@angular/core';
import { education, experience, project, reference } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'Ian\'s Resume';
  skills: string[] = [ 
    'Azure', 
    'C#', 
    '.NET Framework', 
    '.NET Core', 
    'SQL Server', 
    'Python', 
    'JavaScript', 
    'Angular', 
    'HTML', 
    'Java', 
    'Cypress', 
    'Jira', 
    'Bash'
  ];
  references: reference[] = [ 
    {
      name:'James Bekker', 
      company:'Religous Mission Supervisor, University of Utah', 
      email:'James.Bekker@hsc.urah.edu'
    },
    {
      name: 'Bradley Clark',
      company: 'Anglepoint',
      email: 'bradley.clark@anglepoint.com'
    }
  ];
  certs: education[] = [
    {
      giver: 'Microsoft', 
      diploma:'Azure Associate Developer'
    },
    {
      giver: 'Microsoft',
      diploma: 'Azure Fundamentals'
    },
    {
      giver: 'Microsoft',
      diploma: 'Azure Machine Learning Fundamentals'
    }
  ];
  degrees: education[] = [
    {
      giver: 'Utah Valley University', 
      diploma: 'Bachelor of Science in Computer Science'},
  ];
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
  projects: project[] = [
    {
      name: 'KitchenDB',
      highlights: [
        'Inventory management system for recipes and kitchen supplies',
        'Includes SQL database on backend and a custom GUI on frontend'
      ]
    },
    {
      name: 'Assembler/Virtual Machine',
      highlights: [
        'An full implementation of an Assembler and Virtual Machine, built from scratch',
        'Translates Assembly code file into bytes and runs the created bytecode'
      ]
    },
  ];

  skillsView = this.skills.slice(0, 10);
  referenceView = this.references.slice(0, 2);
  certView = this.certs.slice(0, 3);
  degreeView = this.degrees.slice(0, 2);
  experienceView = this.experience
    .sort((a,b) => b.start.valueOf() - a.start.valueOf())
    .slice(0,3);
  projectView = this.projects.slice(0, 2);
}
