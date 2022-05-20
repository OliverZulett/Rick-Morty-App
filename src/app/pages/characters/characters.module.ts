import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { GridContainerModule } from '../../components/grid-container/grid-container.module';
import { CardModule } from '../../components/card/card.module';
import { CharactersService } from './characters.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '../../components/navigation/navigation.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CharactersRoutingModule,
    GridContainerModule,
    CardModule,
    NavigationModule,
  ],
  providers: [CharactersService],
})
export class CharactersModule {}
