import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CraftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
