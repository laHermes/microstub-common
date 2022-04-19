import { Subjects } from './subjects';

export interface OrderCancelledEvent {
	subject: Subjects.OrderCancelled;
	data: {
		id: string;
		ticket: {
			id: string;
			version: number;
		};
	};
}

// expires at is converted to string
