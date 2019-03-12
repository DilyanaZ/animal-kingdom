//Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalsRoutingModule } from "./animals-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSelectModule} from '@angular/material/select';
//Components
import { CommentsFormComponent } from "./comments-form/comments-form.component";
import { AddReactionsComponent } from "./add-reactions/add-reactions.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { AllAnimalsComponent } from "./all-animals/all-animals.component";
import { CreateAnimalComponent } from "./create-animal/create-animal.component";
import { AnimalComponent } from "./animal/animal.component";
import { DetailsAnimalComponent } from "./details-animal/details-animal.component";
import { MineAnimalsComponent } from "./mine-animals/mine-animals.component";
//Services
import { AnimalsService } from "./animals.service";


@NgModule({
  declarations: [
    AllAnimalsComponent,
    CreateAnimalComponent,
    AnimalComponent,
    DetailsAnimalComponent,
    MineAnimalsComponent,
    StatisticComponent,
    CommentsFormComponent,
    AddReactionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AnimalsRoutingModule,
    FileUploadModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [AnimalsService]
})
export class AnimalsModule {}
