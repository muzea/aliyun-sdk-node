export interface DescribeInstanceTrafficResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    InstanceTraffic: {
        /**
         * 实例的请求流量和应答流量
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `10`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-04-01T06:34:03Z
            `
             */
            ItemTime: string;
            /**
             * 指标
             * - inbound 请求流量
             * - outbound 应答流量
             * @example `inbound`
             */
            Item: string;
        }[];
    };
}
