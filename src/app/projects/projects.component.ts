import { Component } from '@angular/core';
import { project } from '../interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
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

  
  projectView = this.projects.slice(0, 2);
}
