export interface GetPfsSqlSampleResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9CB97BC4-6479-55D0-B9D0-EA925AFE****`
     */
    RequestId: string;
    /**
     * 返回状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的SQL样本数据。
     */
    Data: {
        /**
         * 用户ID。
         * @example `196278346919****`
         */
        UserId: string;
        /**
         * 实例ID。
         * @example `rm-2ze1jdv45i7l6****`
         */
        InstanceId: string;
        /**
         * 节点ID。
         * > RDS MySQL集群系列或PolarDB MySQL版数据库实例才会返回该数据。
         * @example `r-x****-db-0`
         */
        NodeId: string;
        /**
         * 逻辑库ID。
         * @example `xxxxx`
         */
        LogicId: string;
        /**
         * 执行SQL的时间，格式为Unix时间戳，单位为毫秒。
         * @example `1660100753556`
         */
        Timestamp: number;
        /**
         * SQL ID。
         * @example `651b56fe9418d48edb8fdf0980ec****`
         */
        SqlId: string;
        /**
         * SQL样本。
         * @example `select * from xxxx where ****`
         */
        Sql: string;
        /**
         * 线程ID。
         * @example `81751940`
         */
        ThreadId: number;
        /**
         * 事件ID。
         * @example `63735293`
         */
        EventId: number;
        /**
         * 该参数在事件开始时默认为NULL，在事件结束时更新为线程当前事件编号。
         * @example `0`
         */
        EndEventId: number;
        /**
         * 事件名称。
         * @example `statement/sql/select`
         */
        EventName: string;
        /**
         * 执行耗时，单位为毫秒。
         * @example `0.199`
         */
        Latency: number;
        /**
         * 锁等待时间，单位为毫秒。
         * @example `0.09`
         */
        LockLatency: number;
        /**
         * SQL语句错误数。
         * @example `0`
         */
        Errors: number;
        /**
         * SQL语句警告数。
         * @example `0`
         */
        Warnings: number;
        /**
         * 影响行数。
         * @example `0`
         */
        RowsAffected: number;
        /**
         * 返回的SQL语句的当前行数。
         * @example `0`
         */
        RowsSent: number;
        /**
         * 扫描行数。
         * @example `2048576`
         */
        RowsExamined: number;
        /**
         * 执行语句时创建的磁盘上内部临时表的数量。
         * @example `0`
         */
        CreateTmpDiskTables: number;
        /**
         * 执行语句时创建的内部临时表的数量。
         * @example `0`
         */
        CreateTmpTables: number;
        /**
         * 不使用索引而执行表扫描的连接数。
         * ><notice>该参数是用来统计联合查询过程中没有利用索引的情况，如果该参数值不为0，请仔细检查表的索引。
         * ></notice>
         * @example `0`
         */
        SelectFullJoin: number;
        /**
         * 在引用表上使用范围搜索的连接数。
         * @example `0`
         */
        SelectFullRangeJoin: number;
        /**
         * 在第一个表中使用范围的连接数量。
         * @example `0`
         */
        SelectRange: number;
        /**
         * 在每一行数据后对键值进行检查，统计不带键值的连接的数量。
         * ><notice>该参数是用来统计联合查询过程中没有利用索引的情况，如果该参数值不为0，请仔细检查表的索引。
         * ></notice>
         * @example `0`
         */
        SelectRangeCheck: number;
        /**
         * 扫描数量。
         * @example `0`
         */
        SelectScan: number;
        /**
         * 排序算法必须执行的合并次数。
         * @example `0`
         */
        SortMergePasses: number;
        /**
         * 使用范围进行排序的次数。
         * @example `0`
         */
        SortRange: number;
        /**
         * 排序行数。
         * @example `0`
         */
        SortRows: number;
        /**
         * 扫描排序次数。
         * @example `1`
         */
        SortScan: number;
        /**
         * 语句在不使用索引的情况下是否执行了表扫描：
         * - **1**：是。
         * - **0**：否。
         * @example `1`
         */
        NoIndexUsed: number;
        /**
         * 服务器是否查找不到可用于该语句的索引：
         * - **1**：是。
         * - **0**：否。
         * @example `1`
         */
        NoGoodIndexUsed: number;
        /**
         * 数据库名称。
         * @example `testDB`
         */
        Db: string;
    }[];
}
