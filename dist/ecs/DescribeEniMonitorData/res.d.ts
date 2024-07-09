export interface DescribeEniMonitorDataResponse {
    /**
     * 返回条目数量。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    MonitorData: {
        /**
         * 辅助网卡流量的监控数据EniMonitorDataType组成的集合。
         */
        EniMonitorData: {
            /**
             * 辅助网卡接收的内网数据包，单位：packets。
             * @example `0`
             */
            PacketRx: string;
            /**
             * 查询监控信息的时间戳。按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-05-21T03:22:00Z`
             */
            TimeStamp: string;
            /**
             * 辅助网卡接收丢弃的内网数据包，单位：packets。
             * @example `0`
             */
            DropPacketRx: string;
            /**
             * 辅助网卡ID。
             * @example `eni-bp19da36d6xdwey****`
             */
            EniId: string;
            /**
             * 辅助网卡发送丢弃的内网数据包，单位：packets。
             * @example `0`
             */
            DropPacketTx: string;
            /**
             * 辅助网卡发送的内网数据包，单位：packets。
             * @example `0`
             */
            PacketTx: string;
            /**
             * 辅助网卡发送的内网数据平均速率，单位：kB/s。
             * @example `0`
             */
            IntranetTx: string;
            /**
             * 辅助网卡接收的内网数据平均速率，单位：kB/s。
             * @example `0`
             */
            IntranetRx: string;
        }[];
    };
}
