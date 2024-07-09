export interface DescribeInstancePacketsResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    InstancePackets: {
        /**
         * 实例流入/流出的数据包
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `0`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-05-24T10:14:53Z
            `
             */
            ItemTime: string;
            /**
             * 指标
             * - InstancePacketRX 流入数据包
             * - InstancePacketTX 流出数据包
             * @example `InstancePacketRX`
             */
            Item: string;
        }[];
    };
}
