import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';
import { navItems } from '../../data/nav-items.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public navItems: INavItem[] = navItems;

  constructor() {
  }

  ngOnInit(): void {
  }

}
