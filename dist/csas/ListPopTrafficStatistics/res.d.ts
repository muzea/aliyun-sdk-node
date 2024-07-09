export interface ListPopTrafficStatisticsResponse {
    /**
     * Id of the request
     * @example `EFE7EBB2-449D-5BBB-B381-CA7839BC1649`
     */
    RequestId: string;
    /**
     * POP点带宽数据列表。
     */
    TrafficData: {
        /**
         * 统计指标名称。分为流入、流出两种。
         * @example `InternetTx`
         */
        MetricName: string;
        /**
         * POP点带宽数据点列表。
         */
        Datapoints: {
            /**
             * 该数据点对应时间。
             * @example `2023-12-06 15:29:00`
             */
            DateTime: string;
            /**
             * 以分钟为单位的平均带宽值。单位为Byte/s。
             * @example `15325`
             */
            Average: number;
        }[];
    }[];
}
