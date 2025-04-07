import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitals',
  standalone: true, //  Make sure it's standalone
  imports: [CommonModule], //  Add CommonModule here
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  vitals: any[] = [];

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.vitals = this.mockService.getVitals();
    console.log("Vitals Data:", this.vitals);  // Debugging
  }
}
