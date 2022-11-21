import { Subjects } from './subjects';
import {Types} from 'mongoose';


export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: Types.ObjectId;
    version: number;
    userId: Types.ObjectId;
    store:[{
      id: Types.ObjectId;
      quantity: number;
    }];
  };
}
