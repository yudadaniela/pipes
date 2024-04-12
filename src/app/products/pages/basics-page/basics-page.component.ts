import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
  public nameLower:string='daniela nieto';
  public nameUpper:string='DANIELA NIETO';
  public fullname:string='yuRANi dAnieLA NIeTo cAsTrO';
  public customDate:Date= new Date()
  
}
