import { Subjects } from './subjects';
import { ServiceStatus } from './types/service-status';
import {Types} from 'mongoose';


export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
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
