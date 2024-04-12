import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes de Angular',
                icon: 'pi  pi-plus',
                items:[
                 {
                    label:'Textos y Fechas',
                    icon:'pi pi-align-left',
                    routerLink:'/'
                },
                {
                    label:'Números',
                    icon:'pi pi-dollar',
                    routerLink:'numbers'
                },
                {
                    label:'No Comunes',
                    icon:'pi pi-globe',
                    routerLink:'uncommon'
                }

                ]
            },
            {
                label:'Pipes Personalizados',
                icon:'pi pi-cog',
                items:[
                    {
                        label:'Custom Pipes',
                        icon:'pi pi-cog',
                        routerLink:'custom'
                    }
                ]
            }
           
        ];
    }
}
