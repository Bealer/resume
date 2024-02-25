import { Component } from '@angular/core';
import { reference } from '../interfaces';
import { FlagService } from '../flag.service';
import { Event as SDKEvent} from '@harnessio/ff-javascript-client-sdk';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.less']
})
export class ReferencesComponent {
  constructor(private flagService: FlagService) {}
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
  v2: boolean = this.flagService.Flag('referencesv2', false)?.valueOf() === true;
  referenceView = this.references.slice(0, 2);

  ngOnInit() {
    
    this.flagService.client.on(SDKEvent.READY, (flags) => {
      this.v2 = this.flagService.Flag('referencesv2', false)?.valueOf() === true;
      console.log('ready', this.v2)
    })
    this.flagService.client.on(SDKEvent.CHANGED, (changed) => {
      this.v2 = this.flagService.Flag('referencesv2', false)?.valueOf() === true;
      console.log('change', this.v2)
    })
  }
}
