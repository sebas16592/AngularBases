import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor', 'Capitan america' ];
  heroeBorrado: string = '...';

  borrarHeroe(){
    console.log('Borrando...');    
    this.heroeBorrado= this.heroes.shift() || '';
    /*const index = this.heroes.indexOf('Hulk');
    if (index > -1) {
      this.heroes.splice(index,1);
    }*/
  }

}
