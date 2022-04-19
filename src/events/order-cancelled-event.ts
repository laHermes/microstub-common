import { Subjects } from './subjects';

export interface OrderCancelledEvent {
	subject: Subjects.OrderCancelled;
	data: {
		id: string;
		version: number;
		ticket: {
			id: string;
		};
	};
}

// expires at is converted to string
