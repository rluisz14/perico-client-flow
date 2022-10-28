import {MatTableDataSource} from '@angular/material';
import { ClientOrders } from './ClientOrders';

export class ClientOrdersOperation {
  private pathVariable: ClientOrders;
  private index: number;
  private title: string;
  private operation: string;
  private dataSource: MatTableDataSource<ClientOrders>;
}
