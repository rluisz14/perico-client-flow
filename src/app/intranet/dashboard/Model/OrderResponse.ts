import {OrderDetailsResponse} from './OrderDetailsResponse';

export class OrderResponse {
  private  orderId: number;
  private  clientDocumentNumber: string;
  private  clientName: string;
  private  employeeName: string;
  private  orderDate: string;
  private  orderStatus: string;
  private  subtotal: number;
  private  igv: number;
  private  deliveryCost: number;
  private  total: number;
  private  phoneNumber: string;
  private  email: string;
  private  paymentMethod: string;
  private  addressDelivery: string;
  private  addressReferenceDelivery: string;
  private  details: OrderDetailsResponse[];
}
