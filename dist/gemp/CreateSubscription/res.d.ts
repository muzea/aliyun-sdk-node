export interface CreateSubscriptionResponse {
    /**
     * request id
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 订阅id
         * @example `101`
         */
        subscriptionId: number;
    };
}
