import { Subjects } from './subjects';

export interface MagUpdatedEvent {
  subject: Subjects.MagUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    storeId: string;
  };
}
