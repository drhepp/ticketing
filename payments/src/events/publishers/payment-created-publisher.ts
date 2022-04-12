import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@dh_mstutorial_tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
