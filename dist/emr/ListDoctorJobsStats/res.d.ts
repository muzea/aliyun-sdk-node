export interface ListDoctorJobsStatsResponse {
    /**
     * 任务汇总列表信息。
     */
    Data: {
        /**
         * 任务提交到YARN的队列。
         * @example `DW`
         */
        Queue: string;
        /**
         * 计算引擎类型。
         * @example `SPARK`
         */
        Type: string;
        /**
         * 任务提交用户名。
         * @example `DW`
         */
        User: string;
        /**
         * CPU总使用量。
         */
        VcoreSeconds: {
            /**
             * 指标名称。
             * @example `vcoreSeconds`
             */
            Name: string;
            /**
             * 指标值。
             * @example `11123`
             */
            Value: number;
            /**
             * 指标单位。
             * @example `VCores * Sec
            `
             */
            Unit: string;
            /**
             * 指标描述。
             * @example `Total vcore usage over time in seconds
            `
             */
            Description: string;
        };
        /**
         * 内存总是用量。
         */
        MemSeconds: {
            /**
             * 指标名称。
             * @example `memSeconds`
             */
            Name: string;
            /**
             * 指标值。
             * @example `12312312`
             */
            Value: number;
            /**
             * 指标单位。
             * @example `MB * Sec
            `
             */
            Unit: string;
            /**
             * 指标描述。
             * @example `Total memory usage over time in seconds
            `
             */
            Description: string;
        };
        /**
         * 任务总量。
         */
        AppsCount: {
            /**
             * 指标名称。
             * @example `appsCount`
             */
            Name: string;
            /**
             * 指标值。
             * @example `123`
             */
            Value: number;
            /**
             * 指标单位。
             * @example `""`
             */
            Unit: string;
            /**
             * 指标描述。
             * @example `Total apps count`
             */
            Description: string;
        };
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
