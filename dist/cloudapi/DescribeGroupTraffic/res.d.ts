export interface DescribeGroupTrafficResponse {
    /**
     * 请求ID
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
    TrafficPerSecond: {
        /**
         * 每秒的流量信息
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `100.0`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2023-01-29T01:30:00Z`
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
