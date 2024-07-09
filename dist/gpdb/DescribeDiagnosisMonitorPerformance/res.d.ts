export interface DescribeDiagnosisMonitorPerformanceResponse {
    /**
     * SQL查询列表。
     */
    Performances: {
        /**
         * 查询ID，即查询的唯一标识。
         * @example `2022042612465401000000012903151998970`
         */
        QueryID: string;
        /**
         * 查询开始时间，为毫秒级UNIX时间戳。
         * @example `1651877940000`
         */
        StartTime: number;
        /**
         * 查询运行的总时间，单位为毫秒（ms）。
         * @example `1`
         */
        Cost: number;
        /**
         * 查询的执行状态，取值如下：
         * - **running**：执行中。
         * - **finished**：已完成。
         * @example `finished`
         */
        Status: string;
        /**
         * 用户名。
         * @example `adbpguser`
         */
        User: string;
        /**
         * 数据库名称。
         * @example `adbtest`
         */
        Database: string;
    }[];
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 查询数量阈值。
     * @example `10000`
     */
    PerformancesThreshold: number;
    /**
     * 查询数量是否截断，取值如下：
     * - **true**：截断。
     * - **false**：不截断。
     * @example `false`
     */
    PerformancesTruncated: boolean;
}
