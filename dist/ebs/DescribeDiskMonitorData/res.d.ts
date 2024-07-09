export interface DescribeDiskMonitorDataResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果总条数。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 云盘的秒级监控数据集合。
     */
    MonitorData: {
        /**
         * 云盘读带宽，单位：MBps。
         * @example `10`
         */
        ReadBPS: number;
        /**
         * 云盘写带宽，单位：MBps。
         * @example `204`
         */
        WriteBPS: number;
        /**
         * 云盘ID。
         * @example `d-bp1bq5g3dxxo1x4o****`
         */
        DiskId: string;
        /**
         * 每秒读操作的次数上限，单位：次/s。
         * @example `2000`
         */
        ReadIOPS: number;
        /**
         * 每秒写操作的次数上限，单位：次/s。
         * @example `2000`
         */
        WriteIOPS: number;
        /**
         * 云盘IOPS水位占比。
         * @example `80(%)`
         */
        IOPSPercent: number;
        /**
         * 云盘BPS水位占比。
         * @example `80(%)`
         */
        BPSPercent: number;
        /**
         * 查询云盘的秒级监控数据的时间戳。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2022-06-01T08:00:00Z`
         */
        Timestamp: string;
        /**
         * 云盘Burst IO数量。
         * @example `0`
         */
        BurstIOCount: number;
        /**
         * 读IO块大小，单位：Bytes
         * @example `4096`
         */
        ReadBlockSize: number;
        /**
         * 写IO块大小，单位：Bytes
         * @example `4096`
         */
        WriteBlockSize: number;
        /**
         * 读延迟，单位：微秒
         * @example `100`
         */
        ReadLatency: number;
        /**
         * 写延迟，单位：微秒
         * @example `100`
         */
        WriteLatency: number;
    }[];
}
