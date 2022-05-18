import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { GridContainerModule } from '../../components/grid-container/grid-container.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    GridContainerModule,
    CardModule
  ]
})
export class CharactersModule { }
