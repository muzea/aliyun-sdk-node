export interface DescribeWaitingSQLRecordsResponse {
    /**
     * 查询列表。
     */
    Items: {
        /**
         * 进程ID，即等待查询SQL的唯一标识。
         * @example `100`
         */
        PID: string;
        /**
         * 查询所属的会话ID。
         * @example `50`
         */
        SessionID: string;
        /**
         * 查询开始时间。为时间戳格式，单位为ms。
         * @example `1660902033374`
         */
        StartTime: number;
        /**
         * SQL等待的时长，单位为ms。
         * @example `26911000`
         */
        WaitingTime: number;
        /**
         * 查询的等待状态，取值如下：
         * - **LockWaiting**：锁等待。
         * - **ResourceWaiting**：资源等待。
         * @example `LockWaiting`
         */
        Status: string;
        /**
         * 查询的SQL文本。
         * @example `Select * from t1,t2 where t1.id=t2.id;`
         */
        SQLStmt: string;
        /**
         * 查询的用户。
         * @example `testUser`
         */
        User: string;
        /**
         * 数据库名称。
         * @example `test`
         */
        Database: string;
    }[];
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
}
