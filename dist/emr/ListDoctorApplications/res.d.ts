export interface ListDoctorApplicationsResponse {
    /**
     * 任务列表详情。
     */
    Data: {
        /**
         * YARN任务ID，如果是Hive任务，则是QueryID或者SessionID。
         * @example `application_1665056147236_*****`
         */
        AppId: string;
        /**
         * 任务IDs,多个ID间使用英文逗号（,）分隔。
         * @example `null`
         */
        Ids: string[];
        /**
         * 任务名称。
         * @example `data-upload`
         */
        AppName: string;
        /**
         * 任务提交用户名。
         * @example `DW`
         */
        User: string;
        /**
         * 任务提交时间，Unix时间戳，单位毫秒。
         * @example `1677465658275`
         */
        StartTime: number;
        /**
         * 任务结束时间，Unix时间戳，单位毫秒。
         * @example `1682049088086`
         */
        EndTime: number;
        /**
         * 任务提交到YARN的队列。
         * @example `DW`
         */
        Queue: string;
        /**
         * 计算引擎类型。
         * @example `TEZ`
         */
        Type: string;
        /**
         * 查询语句，对非SQL任务，为空。
         * @example `SELECT id, count(1) FROM test group by id;
        `
         */
        QuerySql: string;
        /**
         * 指标数据。
         */
        Metrics: {
            /**
             * CPU使用率，同Linux Top的%CPU含义。
             */
            VcoreUtilization: {
                /**
                 * 指标名称。
                 * @example `vcoreUtilization`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `23.1`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of used vcore to total available cores
                `
                 */
                Description: string;
            };
            /**
             * 内存使用率。
             */
            MemUtilization: {
                /**
                 * 指标名称。
                 * @example `memUtilization
                `
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.23`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of used memory to total available memory
                `
                 */
                Description: string;
            };
            /**
             * CPU使用量。
             */
            VcoreSeconds: {
                /**
                 * 指标名称。
                 * @example `vcoreSeconds`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `11123
                `
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
                 * @example `Total memory usage over time in seconds`
                 */
                Description: string;
            };
        };
        /**
         * 任务分析。
         */
        Analysis: {
            /**
             * 任务评分。
             * @example `23`
             */
            Score: number;
            /**
             * 任务运行建议。
             * @example `##### 当前节点：container
            ##### 存在问题：
            最大内存利用率为7.75%，利用率较低
            
            
            尝试减小Tez Container内存，可通过hive.tez.container.size进行设置`
             */
            Suggestion: string;
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
