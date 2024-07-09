export interface DescribeInstanceLatencyResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    InstanceLatency: {
        /**
         * 实例平均延时列表
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `10`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-09-06T02:05:13Z
            `
             */
            ItemTime: string;
            /**
             * 指标
             * - gatewayLatency API网关处理产生的延时
             * - latency 后端服务处理产生的延时
             * @example `latency`
             */
            Item: string;
        }[];
    };
}
