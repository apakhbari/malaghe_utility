import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    userId: string;
    store:[{
      id: string;
      quantity: number;
    }];
  };
}
