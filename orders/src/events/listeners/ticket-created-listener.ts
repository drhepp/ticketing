import { Message } from 'node-nats-streaming';
import {
  Subjects,
  Listener,
  TicketCreatedEvent,
} from '@dh_mstutorial_tickets/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-names';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    const { id, version, title, price } = data;
    const ticket = Ticket.build({
      id,
      version,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
