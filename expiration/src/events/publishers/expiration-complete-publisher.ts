import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dh_mstutorial_tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
