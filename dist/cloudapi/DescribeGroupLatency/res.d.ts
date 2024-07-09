export interface DescribeGroupLatencyResponse {
    /**
     * 本次请求的ID。
     * @example `75DC3AB0-421C-5371-8170-86AEABF77AD0`
     */
    RequestId: string;
    LatencyPacket: {
        /**
         * 平均时延信息
         */
        MonitorItem: {
            /**
             * 延迟数，单位：ms
             * @example `100.0`
             */
            ItemValue: string;
            /**
             * 时间节点，按照ISO8601标准表示，格式为：YYYY-MM-DDThh:mm:ssZ。
             * @example `2023-03-30T16:10:00Z`
             */
            ItemTime: string;
            /**
             * 指标
             * - latency：后端处理延迟
             * - gatewayLatency：API网关处理延迟
             * @example `latency`
             */
            Item: string;
        }[];
    };
}
