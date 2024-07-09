export interface DescribeDcdnErUsageDataResponse {
    /**
     * 结束时间。
     * @example `2018-10-31T16:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2018-10-30T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    ErAccData: {
        /**
         * 数据列表。
         */
        ErAccItem: {
            /**
             * 边缘函数ER请求数。
             * @example `125`
             */
            ErAcc: number;
            /**
             * 时间片起始时刻。
             * @example `2018-10-30T13:00:00Z`
             */
            TimeStamp: string;
            /**
             * 函数规格，默认为空。请求参数SplitBy指定spec时分组输出。
             * @example `50ms`
             */
            Spec: string;
            /**
             * 边缘函数ID，默认为空。请求参数SplitBy指定routine时分组输出。
             * @example `routine1.test`
             */
            Routine: string;
        }[];
    };
}
