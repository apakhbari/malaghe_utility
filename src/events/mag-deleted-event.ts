import { Subjects } from './subjects';

export interface MagDeletedEvent {
  subject: Subjects.MagDeleted;
  data: {
    id: string;
    version: number;
    title: string;
    storeId: string;
  };
}
