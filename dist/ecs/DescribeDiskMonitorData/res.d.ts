export interface DescribeDiskMonitorDataResponse {
    /**
     * 云盘使用信息的返回条目数量。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    MonitorData: {
        /**
         * 云盘的监控数据集合。
         */
        DiskMonitorData: {
            /**
             * 云盘读带宽，单位：Byte/s。
             * @example `0`
             */
            BPSRead: number;
            /**
             * 云盘I/O读操作，单位：次/s。
             * @example `0`
             */
            IOPSRead: number;
            /**
             * 云盘读时延。单位：μs（微秒）。
             * @example `0`
             */
            LatencyRead: number;
            /**
             * 云盘读写总带宽，单位：Byte/s。
             * @example `204`
             */
            BPSTotal: number;
            /**
             * 云盘I/O读写总操作，单位：次/s。
             * @example `0`
             */
            IOPSTotal: number;
            /**
             * 查询监控信息的时间戳。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2014-07-23T12:07:00Z`
             */
            TimeStamp: string;
            /**
             * 云盘写时延。单位：μs（微秒）。
             * @example `0`
             */
            LatencyWrite: number;
            /**
             * 云盘I/O写操作，单位：次/s。
             * @example `0`
             */
            IOPSWrite: number;
            /**
             * 云盘ID。
             * @example `d-bp1bq5g3dxxo1x4o****`
             */
            DiskId: string;
            /**
             * 云盘写带宽，单位：Byte/s。
             * @example `204`
             */
            BPSWrite: number;
        }[];
    };
}
