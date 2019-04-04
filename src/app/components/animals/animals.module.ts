//Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalsRoutingModule } from "./animals-routing.module";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { NgxPaginationModule } from "ngx-pagination";
import { MatSelectModule } from '@angular/material/select';
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
import { CreateReactiveComponent } from './create-reactive/create-reactive.component';
import { CreateAnimalPageComponent } from './create-animal-page/create-animal-page.component';


@NgModule({
  declarations: [
    AllAnimalsComponent,
    CreateAnimalComponent,
    AnimalComponent,
    DetailsAnimalComponent,
    MineAnimalsComponent,
    StatisticComponent,
    CommentsFormComponent,
    AddReactionsComponent,
    CreateReactiveComponent,
    CreateAnimalPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AnimalsRoutingModule,
    FileUploadModule,
    NgxPaginationModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [AnimalsService]
})
export class AnimalsModule {}
