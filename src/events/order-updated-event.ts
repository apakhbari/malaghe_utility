import { Subjects } from './subjects';
import { ServiceStatus } from './types/service-status';

export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    id: string;
    version: number;
    userId: string;
    expiresAt: string;
    serviceStatus?: ServiceStatus;
    store?:[{
      id: string;
      title: string;
      price: number;
      quantity: number;
    }];
  };
}
