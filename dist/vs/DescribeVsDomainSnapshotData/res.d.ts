export interface DescribeVsDomainSnapshotDataResponse {
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    SnapshotDataPerInterval: {
        /**
         * 快照周期数据列表
         */
        DataModule: {
            /**
             * 截图量数值。
             * @example `1`
             */
            SnapshotValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
