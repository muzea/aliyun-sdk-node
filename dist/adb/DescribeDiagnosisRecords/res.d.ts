export interface DescribeDiagnosisRecordsResponse {
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * SQL语句详情列表。
     */
    Querys: {
        /**
         * SQL语句详情。
         * > 出于性能考虑，当前SQL语句最长支持显示5120个字符，超出限制的SQL语句会被截断。您可以调用[DownloadDiagnosisRecords](~~308212~~)接口下载符合指定条件的SQL语句的摘要信息，包括完整的SQL语句。
         * @example `SELECT count(*)\nFROM nation`
         */
        SQL: string;
        /**
         * SQL语句的截断阈值，固定为5120个字符。超过该长度的SQL语句会被截断。
         * @example `5120`
         */
        SQLTruncatedThreshold: number;
        /**
         * SQL语句的状态，取值为：
         * - **running**：执行中。
         * - **finished**：已完成。
         * - **failed**：执行失败。
         * @example `finished`
         */
        Status: string;
        /**
         * 返回数据量，单位：Byte。
         * @example `9`
         */
        OutputDataSize: number;
        /**
         * 查询的总耗时。单位：毫秒。
         * > 该耗时指标是`QueuedTime`、`TotalPlanningTime`和`ExecutionTime`三个耗时指标的累加值。
         * @example `10`
         */
        Cost: number;
        /**
         * 返回行数。
         * @example `1`
         */
        OutputRows: number;
        /**
         * 执行SQL语句的AnalyticDB MySQL前端节点IP和端口信息。
         * @example `10.0.xx.xx:3004`
         */
        RcHost: string;
        /**
         * 扫描数据量，单位：Byte。
         * @example `9`
         */
        ScanSize: number;
        /**
         * 查询ID。
         * @example `2021093000414401000000023503151******`
         */
        ProcessId: string;
        /**
         * SQL语句的执行开始时间，格式为Unix时间戳，单位：毫秒。
         * @example `1632933704000`
         */
        StartTime: number;
        /**
         * 查询结果的长度是否超过阈值（即是否被截断），取值如下：
         * - **true**：查询结果的长度超过阈值。
         * - **false**：查询结果的长度未超过阈值。
         * @example `false`
         */
        SQLTruncated: boolean;
        /**
         * 执行SQL语句的数据库名称。
         * @example `adb_demo`
         */
        Database: string;
        /**
         * 扫描行数。
         * @example `1`
         */
        ScanRows: number;
        /**
         * SQL语句内部算子的耗时排名。
         * > 仅状态为执行中，即`Status`取值为`running`的SQL语句支持返回该字段。
         * @example `1`
         */
        ResourceCostRank: number;
        /**
         * 访问源地址。
         * @example `59.82.xx.xx`
         */
        ClientIp: string;
        /**
         * 峰值内存，单位：Byte。
         * @example `16648`
         */
        PeakMemory: number;
        /**
         * 排队耗时，单位：毫秒。
         * @example `0`
         */
        QueueTime: number;
        /**
         * SQL语句所属的资源池。
         * @example `user_default`
         */
        ResourceGroup: string;
        /**
         * 执行SQL语句的用户名。
         * @example `test_user`
         */
        UserName: string;
        /**
         * 查询执行的耗时，单位：毫秒。
         * @example `6`
         */
        ExecutionTime: number;
        /**
         * 生成执行计划的耗时，单位：毫秒。
         * @example `4`
         */
        TotalPlanningTime: number;
        /**
         * ETL任务写表的行数。
         * @example `0`
         */
        EtlWriteRows: number;
        /**
         * 查询生成的总Stage数量。
         * @example `2`
         */
        TotalStages: number;
    }[];
    /**
     * 请求ID。
     * @example `109462AF-B5FA-3D5A-9377-B27E5B******`
     */
    RequestId: string;
}
