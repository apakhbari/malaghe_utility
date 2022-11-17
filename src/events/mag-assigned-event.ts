import { Subjects } from './subjects';

export interface MagAssignedEvent {
  subject: Subjects.MagAssigned;
  data: {
    id: string;
    version: number;
    slug: string;
    storeId?: string;
  };
}
