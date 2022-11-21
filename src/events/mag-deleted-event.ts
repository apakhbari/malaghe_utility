import { Subjects } from './subjects';
import {Types} from 'mongoose';


export interface MagDeletedEvent {
  subject: Subjects.MagDeleted;
  data: {
    id: Types.ObjectId;
    version: number;
    title: string;
    storeId: Types.ObjectId;
  };
}
