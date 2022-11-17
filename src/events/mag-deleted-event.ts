import { Subjects } from './subjects';

export interface MagDeletedEvent {
  subject: Subjects.MagDeleted;
  data: {
    id: string;
    version: number;
    storeId?: string;
  };
}
