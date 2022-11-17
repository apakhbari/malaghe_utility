import { Subjects } from './subjects';

export interface MagUpdatedEvent {
  subject: Subjects.MagUpdated;
  data: {
    id: string;
    version: number;
    slug: string;
    storeId?: string;
  };
}
