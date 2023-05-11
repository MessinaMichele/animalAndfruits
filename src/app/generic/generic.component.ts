import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../models/emoji.model';
import { ANIMALS, FRUITS } from '../models/emoji.model';
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
genVect : Emoji[]= [{name:"", emoji:""}];
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('https://paolocaruga-01angularem-vgieweufivv.ws-eu97.gitpod.io/'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    //this.service.getTrack()
    if (uri_param == 'fruits') this.genVect = FRUITS;
    if (uri_param == 'animals') this.genVect = ANIMALS;
  }
}




