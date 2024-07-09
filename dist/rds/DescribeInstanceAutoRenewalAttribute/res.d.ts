export interface DescribeInstanceAutoRenewalAttributeResponse {
    /**
     * 请求ID。
     * @example `4182309D-CD29-49B1-B4A5-D7CB4D56C31F`
     */
    RequestId: string;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 实例续费信息列表。
         */
        Item: {
            /**
             * 实例状态。
             * @example `Normal`
             */
            Status: string;
            /**
             * 续费周期。
             * @example `1`
             */
            Duration: number;
            /**
             * 实例ID。
             * @example `rm-bp****`
             */
            DBInstanceId: string;
            /**
             * 是否自动续费。
             * @example `True`
             */
            AutoRenew: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
