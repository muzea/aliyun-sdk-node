export interface GetDoctorJobResponse {
    /**
     * 任务信息。
     */
    Data: {
        /**
         * 任务提交到YARN的ID。
         * @example `application_1542620905989_****`
         */
        AppId: string;
        /**
         * 任务名称。
         * @example `
        CREATE TABLE test...ranks=1 (Stage-1)
        `
         */
        AppName: string;
        /**
         * 任务提交用户名。
         * @example `DW`
         */
        User: string;
        /**
         * 任务提交到YARN的队列。
         * @example `DW`
         */
        Queue: string;
        /**
         * 应用执行状态，取值说明：
         * * FINISHED：结束的。
         * * FAILED：失败的。
         * * KILLED：中止的。
         * @example `FINISHED`
         */
        State: string;
        /**
         * 应用执行结束状态，取值说明：
         * * SUCCEEDED：成功的。
         * * FAILED：失败的。
         * * KILLED：中止的。
         * * ENDED: 结束的。
         * * UNDEFINED：未定义的。
         * @example `KILLED`
         */
        FinalStatus: string;
        /**
         * 计算引擎类型。
         * @example `SPARK`
         */
        Type: string;
        /**
         * 任务提交时间，Unix时间戳，单位毫秒。
         * @example `1673946000000`
         */
        StartTime: number;
        /**
         * 任务启动时间，Unix时间戳，单位毫秒。
         * @example `1665014400000`
         */
        LaunchTime: number;
        /**
         * 任务运行总时间，单位毫秒。
         * @example `278`
         */
        ElapsedTime: number;
        /**
         * 任务结束时间，Unix时间戳，单位毫秒。
         * @example `1658388322000`
         */
        FinishTime: number;
        /**
         * 指标数据。
         */
        Metrics: {
            /**
             * CPU使用量。
             */
            VcoreSeconds: {
                /**
                 * 指标名称。
                 * @example `vcoreSeconds
                `
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
                 * @example `Total vcore usage over time in seconds`
                 */
                Description: string;
            };
            /**
             * 内存使用量。
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
                 * @example `MB * Sec`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total memory usage over time in seconds
                `
                 */
                Description: string;
            };
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
