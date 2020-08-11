export enum OrderStatus {
  // When the order has been created
  // ticket it is trying to order has not been
  // reserved
  Created = 'created',

  /**
   *  The ticket order is trying to reserved is already reserved
   *  or the user has cancelled the order
   * The order has expired before payment
   */
  Cancelled = 'cancelled',

  /**
   * The order has already sucessfully reserved the ticket
   */
  AwaitingPayment = 'awaiting:payment',

  /**
   * The order has reserved the ticket and user
   * has completed the payment
   */
  Complete = 'complete',
}
