import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@dh_mstutorial_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
