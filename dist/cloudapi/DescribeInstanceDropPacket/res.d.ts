export interface DescribeInstanceDropPacketResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ001`
     */
    RequestId: string;
    InstanceDropPacket: {
        /**
         * 实例丢包信息列表
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `0.0`
             */
            ItemValue: string;
            /**
             * 时间坐标，按照ISO8601标准表示。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-09-06T04:00:36Z
            `
             */
            ItemTime: string;
            /**
             * 指标
             * - InstanceDropPacketRX 实例每秒丢弃入包数
             * - InstanceDropPacketTX 实例每秒丢弃出包数
             * @example `InstanceDropPacketRX`
             */
            Item: string;
        }[];
    };
}
