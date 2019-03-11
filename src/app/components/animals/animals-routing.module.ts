import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllAnimalsComponent } from "./all-animals/all-animals.component";
import { DetailsAnimalComponent } from "./details-animal/details-animal.component";
import { CreateAnimalComponent } from "./create-animal/create-animal.component";
import { MineAnimalsComponent } from "./mine-animals/mine-animals.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { AnimalsResolver } from "./animals.resolver";

const animalsRoutes: Routes = [
 
      {
        path: "all",
        component: AllAnimalsComponent,
        resolve: { animals: AnimalsResolver }
      },
      { path: "stats", component: StatisticComponent },

      {
        path: "details/:id",
        component: DetailsAnimalComponent
      },
      { path: "create", component: CreateAnimalComponent },
      { path: "mine", component: MineAnimalsComponent }
    
  //search component
];

@NgModule({
  imports: [RouterModule.forChild(animalsRoutes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule {}
