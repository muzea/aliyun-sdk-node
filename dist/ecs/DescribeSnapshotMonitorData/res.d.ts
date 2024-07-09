export interface DescribeSnapshotMonitorDataResponse {
    /**
     * 请求ID。
     * @example `9F8163A8-F5DE-47A2-A572-4E062D223E09`
     */
    RequestId: string;
    MonitorData: {
        /**
         * 快照容量变化数据的集合。
         */
        DataPoint: {
            /**
             * 快照总容量，单位：字节（Byte）。
             * @example `243036848128`
             */
            Size: number;
            /**
             * 某一快照容量数值对应的时间戳。
             * @example `2019-05-10T04:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
