import { Subjects } from './subjects';
import { ServiceStatus } from './types/service-status';
import {Types} from 'mongoose';


export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: Types.ObjectId;
    version: number;
    userId: Types.ObjectId;
    expiresAt: string;
    serviceStatus?: ServiceStatus;
    store?:[{
      id: Types.ObjectId;
      title: string;
      price: number;
      quantity: number;
    }];
  };
}
