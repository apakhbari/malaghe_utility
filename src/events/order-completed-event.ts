import { Subjects } from './subjects';
import {Types} from 'mongoose';


export interface OrderCompletedEvent {
  subject: Subjects.OrderCompleted;
  data: {
    id: Types.ObjectId;
    version: string;
    userId: Types.ObjectId;
  };
}
