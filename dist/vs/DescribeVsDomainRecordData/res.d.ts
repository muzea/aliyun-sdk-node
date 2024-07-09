export interface DescribeVsDomainRecordDataResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    RecordDataPerInterval: {
        /**
         * 每个时间间隔的录制时长信息。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2021-11-19T15:59:59Z`
             */
            TimeStamp: string;
            /**
             * 流数。
             * @example `1`
             */
            StreamCountValue: string;
            /**
             * 截图数。
             * @example `100`
             */
            RecordValue: string;
        }[];
    };
}
