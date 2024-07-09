export interface ListSubscriptionServiceGroupsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务列表
         */
        serviceIds: number[];
        /**
         * 幂等校验token
         * @example `89f51d2e-5527-4f6c-a6c6-4411b5496e9f`
         */
        clientToken: string;
    };
}
