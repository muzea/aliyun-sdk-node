export interface DescribeLiveGrtnTrafficUsageResponse {
    /**
     * 应用ID。
     * @example `7fd341b3-c6fa-43e1-96b8-7295a1dd****`
     */
    AppId: string;
    /**
     * 用量区域代号。
     * @example `CN`
     */
    Area: string;
    /**
     * 结束时间。
     * @example `2023-09-15T16:00:00Z`
     */
    EndTime: string;
    /**
     * 查询用量的类型。
     * @example `traf`
     */
    Filed: string;
    /**
     * 请求ID。
     * @example `5EDF62E0-C847-1C21-8C69-0780F73AD555`
     */
    RequestId: string;
    /**
     * 起始时间。
     * @example `2023-09-12T06:10:00Z`
     */
    StartTime: string;
    UsageDataPerInterval: {
        /**
         * 每个查询粒度的数据。
         */
        UsageData: {
            /**
             * 时间片起始时刻。
             * @example `2023-09-12T06:10:00Z`
             */
            TimeStamp: string;
            /**
             * 用量。
             * @example `6542`
             */
            Value: number;
        }[];
    };
}
