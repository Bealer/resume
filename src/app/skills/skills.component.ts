import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
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

  skillsView = this.skills.slice(0, 10);
}
