import { Component, OnInit } from "@angular/core";
import { AnimalsService } from "../animals.service";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrls: ["./statistic.component.css"]
})
export class StatisticComponent implements OnInit {
  statistic: any;

  constructor(public animalsService: AnimalsService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animalsService
        .getStatistic()
        .subscribe(data => (this.statistic = data));
    }, 6 * 1000);
  }
}
