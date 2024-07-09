export interface DescribeEpnBandWidthDataResponse {
    /**
     * 实例的监控数据集合。
     */
    MonitorData: {
        /**
         * 带宽监控数据。
         */
        BandWidthMonitorData: {
            /**
             * 下行带宽，单位：bit/s。
             * @example `0`
             */
            DownBandWidth: number;
            /**
             * 实例接收的公网数据流量，单位：bits。
             * @example `0`
             */
            InternetRX: number;
            /**
             * 实例发送的公网数据流量，单位：bits。
             * @example `0`
             */
            InternetTX: number;
            /**
             * 查询监控信息的时间戳，UTC时间，格式为yyyy-MM-DDThh:mm:ssZ。
             * @example `2019-10-12T05:45:00Z`
             */
            TimeStamp: string;
            /**
             * 上行带宽，单位：bit/s。
             * @example `0`
             */
            UpBandWidth: number;
        }[];
        /**
         * 查询时间段内最大下行带宽，单位：bit/s。
         * @example `16817468`
         */
        MaxDownBandWidth: number;
        /**
         * 查询时间范围内最大上行带宽，单位：bit/s。
         * @example `231008`
         */
        MaxUpBandWidth: number;
    };
    /**
     * 请求ID。
     * @example `1D289DAA-F6DA-5FC4-AE47-F5C8B6277BFC`
     */
    RequestId: string;
}
