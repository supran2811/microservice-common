import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
