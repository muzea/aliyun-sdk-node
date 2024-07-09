export interface DescribeUserBandWidthDataResponse {
    /**
     * 业务返回码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 监控数据信息。
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
         * 查询时间范围内最大下行带宽，单位：bit/s。
         * @example `16817468`
         */
        MaxDownBandWidth: string;
        /**
         * 查询时间范围内最大上行带宽，单位：bit/s。
         * @example `231008`
         */
        MaxUpBandWidth: string;
    };
    /**
     * 请求ID。
     * @example `50373E71-7710-4620-8AAB-133CCE49451C`
     */
    RequestId: string;
}
