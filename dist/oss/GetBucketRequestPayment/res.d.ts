export interface GetBucketRequestPaymentResponse {
    /**
     * 请求者付费配置的容器。
     */
    RequestPaymentConfiguration: {
        /**
         * 指定Bucket付费类型。
         * 取值：BucketOwner、Requester
         * @example `Requester`
         */
        Payer: string;
    };
}
