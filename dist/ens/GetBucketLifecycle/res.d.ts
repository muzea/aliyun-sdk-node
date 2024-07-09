export interface GetBucketLifecycleResponse {
    /**
     * 请求ID。
     * @example `A2583E8B-B930-4F59-ADC0-0E209A90C46E`
     */
    RequestId: string;
    /**
     * 规则详细信息。
     */
    Rule: {
        /**
         * 标识规则的唯⼀ID。
         * @example `1`
         */
        ID: string;
        /**
         * 过期时间。
         */
        Expiration: {
            /**
             * 过期天数。
             * @example `5`
             */
            Days: string;
            /**
             * 过期日期。
             * @example `yyy-MM-DDThh:mm:ssZ`
             */
            CreatedBeforeDate: string;
        };
        /**
         * 规则所适⽤的前缀。
         * @example `image`
         */
        Prefix: string;
        /**
         * 规则状态，取值：
         * - **Enabled**：定期执⾏该规则。
         * - **Disabled**：忽略该规则。
         * @example `Enabled`
         */
        Status: string;
    }[];
}
