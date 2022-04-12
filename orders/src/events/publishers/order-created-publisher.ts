import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@dh_mstutorial_tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
