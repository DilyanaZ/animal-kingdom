import  { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { AnimalComponent } from './animal/animal.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { MineAnimalsComponent } from './mine-animals/mine-animals.component';
import { AnimalsService } from './animals.service';
import { AnimalsRoutingModule } from './animals-routing.module';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';
import { FileUploadModule } from "ng2-file-upload";
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
 declarations:[
   AllAnimalsComponent,
   CreateAnimalComponent,
   AnimalComponent,
   DetailsAnimalComponent,
   MineAnimalsComponent,
   StatisticComponent
 ],
 imports:[
    CommonModule,
    FormsModule,
    BrowserModule,
    AnimalsRoutingModule,
    FileUploadModule,
    NgxPaginationModule
  ], 
 providers:[
   AnimalsService
 ]
 
})
export class AnimalsModule { }