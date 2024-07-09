export interface DescribeInstanceAutoRenewalAttributeResponse {
    /**
     * 请求ID。
     * @example `2B17D708-1D6D-49F3-B6D7-478371DD****`
     */
    RequestId: string;
    /**
     * 当前显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页显示的记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 实例的自动续费信息组成的集合。
         */
        Item: {
            /**
             * 续费周期，单位为月。
             * @example `1`
             */
            Duration: number;
            /**
             * 实例ID。
             * @example `r-bp1zxszhcgatnx****`
             */
            DBInstanceId: string;
            /**
             * 自动续费状态，返回值：
             * * **true**：已开启。
             * * **false**：未开启。
             * @example `true`
             */
            AutoRenew: string;
            /**
             * 地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
        }[];
    };
}
