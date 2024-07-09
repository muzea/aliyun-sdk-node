export interface GetSubscriptionRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 订阅id
         * @example `10`
         */
        subscriptionId: number;
        notFilterScopeObjectDeleted: boolean;
    };
}
