import {OrderDetailsRequest} from './OrderDetailsResquest';

export class OrderRequest {
  private  clientDocumentNumber: string;
  private  phoneNumber: string;
  private  email: string;
  private  paymentMethod: string;
  private  addressDelivery: string;
  private  addressReferenceDelivery: string;
  private  products: OrderDetailsRequest[];
}
