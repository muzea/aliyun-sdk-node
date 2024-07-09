export interface DescribeDiskMonitorDataListResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 云盘的秒级监控数据集合。
     */
    MonitorData: {
        /**
         * 云盘ID。
         * @example `d-bp67acfmxazb4p****`
         */
        DiskId: string;
        /**
         * Burst事件起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2022-06-01T08:00:00Z`
         */
        Timestamp: string;
        /**
         * Burst IO数量。
         * @example `2000`
         */
        BurstIOCount: number;
    }[];
    /**
     * 查询结果总条数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `e71d8a535bd9c****`
     */
    NextToken: string;
}
