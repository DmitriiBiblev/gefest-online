import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
