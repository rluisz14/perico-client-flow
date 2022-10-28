import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource, TooltipPosition} from '@angular/material';
import {AuthService} from '../service/auth.service';
import {UtilModule} from '../core/util.module';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {Orders} from './Model/Orders';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.css'],
  animations: [
    trigger('registerOrder', [
      transition('* => *', [
        style({
          backgroundColor: 'black'
        }),
        animate('0.3s', keyframes([
          style({
            transform: 'translate(1px, 1px) rotate(0deg)'
          }),
          style({
            transform: 'translate(-1px, -2px) rotate(-1deg)'
          }),
          style({
            transform: 'translate(-3px, 0px) rotate(1deg)'
          }),
          style({
            transform: 'translate(3px, 2px) rotate(0deg)'
          }),
          style({
            transform: 'translate(1px, -1px) rotate(1deg)'
          }),
          style({
            transform: 'translate(-1px, 2px) rotate(-1deg)'
          }),
          style({
            transform: 'translate(-3px, 1px) rotate(0deg)'
          }),
          style({
            transform: 'translate(3px, 1px) rotate(-1deg)'
          }),
          style({
            transform: 'translate(-1px, -1px) rotate(1deg)'
          }),
          style({
            transform: 'translate(1px, 2px) rotate(0deg)'
          }),
          style({
            transform: 'translate(1px, -2px) rotate(-1deg)'
          })
        ]))
      ])
    ])
  ]
})
export class CleanerComponent implements OnInit {
  isOpened = false;
  orderList: Orders[];
  constructor(private router: Router,
              private dialog: MatDialog,
              private authService: AuthService,
              private changeDR: ChangeDetectorRef) {
  }
  dataSource: MatTableDataSource<Orders>;
  displayedColumns: string[] = ['producto', 'precio', 'acciones'];
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];

  ngOnInit() {
    this.orderList = UtilModule.orderList;
    this.refresh();
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.orderList);
  }

  getTotalCost() {
    this.dataSource._updateChangeSubscription();
    return this.dataSource.data.map(d => d['productPrice']).reduce((acc, value) => acc + value, 0);
  }

  openClose() {
    this.isOpened = this.isOpened === false;
  }

  deleteItem(item: number) {
    this.orderList.splice(item, 1);
  }

  routeToComplete() {
    localStorage.setItem('confirmOrder', 'true');
    this.router.navigate(['client-complete']).then(r => {});
  }

  isVisible() {
    if (!localStorage.getItem('confirmOrder')) {
      this.orderList = UtilModule.orderList;
      this.refresh();
      this.dataSource._updateChangeSubscription();
      return true;
    } else {
      return false;
    }
  }
}
