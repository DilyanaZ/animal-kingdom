import { Component, OnInit, DoCheck } from "@angular/core";
import { AnimalsService } from "../animals.service";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrls: ["./statistic.component.css"]
})
export class StatisticComponent implements OnInit, DoCheck {
  statistic: any;

  constructor(public animalsService: AnimalsService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.animalsService
      .getStatistic()
      .subscribe(data => (this.statistic = data));
  }
}
