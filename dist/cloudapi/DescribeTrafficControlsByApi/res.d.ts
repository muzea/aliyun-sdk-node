export interface DescribeTrafficControlsByApiResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    TrafficControlItems: {
        /**
         * 由 TrafficControlItem 组成的数组格式，返回策略的信息项
         */
        TrafficControlItem: {
            /**
             * 流控策略ID
             * @example `dd05f1c54d6749eda95f9fa6d491449a`
             */
            TrafficControlItemId: string;
            /**
             * 绑定时间
             * @example `2016-07-23T08:28:48Z`
             */
            BoundTime: string;
            /**
             * 流控策略名称
             * @example `mysecret`
             */
            TrafficControlItemName: string;
        }[];
    };
}
