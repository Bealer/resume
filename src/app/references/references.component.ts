import { Component } from '@angular/core';
import { reference } from '../interfaces';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.less']
})
export class ReferencesComponent {
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

  v2: boolean = false;
  referenceView = this.references.slice(0, 2);
}
