"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    // When the order has been created
    // ticket it is trying to order has not been
    // reserved
    OrderStatus["Created"] = "created";
    /**
     *  The ticket order is trying to reserved is already reserved
     *  or the user has cancelled the order
     * The order has expired before payment
     */
    OrderStatus["Cancelled"] = "cancelled";
    /**
     * The order has already sucessfully reserved the ticket
     */
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    /**
     * The order has reserved the ticket and user
     * has completed the payment
     */
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
