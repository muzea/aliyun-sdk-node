export interface DescribeDiagnosisRecordsResponse {
    /**
     * SQL查询列表。
     */
    Items: {
        /**
         * 查询ID，即查询的唯一标识。
         * @example `2022042612465401000000012903151998970`
         */
        QueryID: string;
        /**
         * 查询所属的会话ID。
         * @example `50`
         */
        SessionID: string;
        /**
         * 查询开始的时间，为毫秒级的UNIX时间戳。
         * @example `1651877940000`
         */
        StartTime: number;
        /**
         * 查询运行的总时间，单位为秒（s）。
         * @example `1`
         */
        Duration: number;
        /**
         * 查询的执行状态，取值如下：
         * - **running**：执行中。
         * - **finished**：已完成。
         * @example `finished`
         */
        Status: string;
        /**
         * SQL语句。
         * @example `SELECT * FROM t1,t2 WHERE t1.id=t2.id;`
         */
        SQLStmt: string;
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
        /**
         * SQL语句是否截断，取值如下：
         * - **true**：需要截断。
         * - **false**：不需要截断。
         * @example `false`
         */
        SQLTruncated: boolean;
        /**
         * SQL语句截断阈值，取值为字符串的字符数。
         * @example `5120`
         */
        SQLTruncatedThreshold: number;
    }[];
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
}
