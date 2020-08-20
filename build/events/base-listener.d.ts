import nats, { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    protected client: Stan;
    protected ackWait: number;
    constructor(client: Stan);
    /** Enable this option for manual ack
     *
     * setDeliverAllAvailable()
     * It delivers all messages when service goes up first time
     * And
     * setDurableName
     * nats will store the messages which
     * are not acked so that it can redliver
     * them again when service is up.
     *
     */
    subscriptionOptions(): nats.SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
