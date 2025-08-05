import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lucroTotal: number = 0;
  vendasSemana: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getLucroTotal().subscribe(data => {
      this.lucroTotal = data;
    });

    this.dashboardService.getVendasSemana().subscribe(data => {
      this.vendasSemana = data;
    });
  }
}
