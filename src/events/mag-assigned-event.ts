import { Subjects } from './subjects';
import {Types} from 'mongoose';

export interface MagAssignedEvent {
  subject: Subjects.MagAssigned;
  data: {
    id: Types.ObjectId;
    version: number;
    title: string;
    storeId: Types.ObjectId;
  };
}
