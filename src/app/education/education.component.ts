import { Component } from '@angular/core';
import { education } from '../interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent {
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

  
  certView = this.certs.slice(0, 3);
  degreeView = this.degrees.slice(0, 2);
}
