import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCancelledEvent {
	subject: Subjects.OrderCancelled;
	data: {
		id: string;
		status: OrderStatus;
		userId: string;
		expiresAt: string;
		ticket: {
			id: string;
			price: number;
		};
	};
}

// expires at is converted to string
