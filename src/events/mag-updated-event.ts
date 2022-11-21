import { Subjects } from './subjects';
import {Types} from 'mongoose';


export interface MagUpdatedEvent {
  subject: Subjects.MagUpdated;
  data: {
    id: Types.ObjectId;
    version: number;
    title: string;
    storeId: Types.ObjectId;
  };
}
