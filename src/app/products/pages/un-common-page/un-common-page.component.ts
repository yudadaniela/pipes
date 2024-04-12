import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.scss'],
})
export class UnCommonPageComponent {
  //i18nSelect Pipe
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    this.name = 'Daniela';
    this.gender = 'female';
  }
  //i18nSelect Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando',
    '=1':' tenemos un  cliente esperando',
    '=2':' tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person={
   name:'fernando',
   age:26,
   address:'ottwa canada'
  }
  //async pipe
  public myObservableTimer=interval(2000).pipe(
    tap(value=>console.log('tap:', value))
    );
  public promiseValue:Promise<string>=new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('teneos data en la promesa')
    }, 3500);
  })
}
