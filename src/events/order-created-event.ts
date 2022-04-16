import { Subjects } from './subjects';

export interface OrderCreatedEvent {
	subject: Subjects.OrderCreated;
	data: {
		id: string;
		ticket: {
			id: string;
		};
	};
}

// expires at is converted to string
