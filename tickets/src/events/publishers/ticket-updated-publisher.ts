import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@dh_mstutorial_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
