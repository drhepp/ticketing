import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@dh_mstutorial_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
