export interface DescribeWaitingSQLInfoResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 数据库名称。
     * @example `test`
     */
    Database: string;
    /**
     * 锁等待的查询的具体信息。
     */
    Items: {
        /**
         * 进程ID，即等待查询SQL的唯一标识。
         * @example `100`
         */
        PID: string;
        /**
         * 查询的用户。
         * @example `testUser`
         */
        User: string;
        /**
         * 查询的SQL文本。
         * @example `Select * from t1,t2 where t1.id=t2.id;`
         */
        SQLStmt: string;
        /**
         * 查询所属应用。
         * @example `DataGrip 2022.1.5`
         */
        Application: string;
        /**
         * 未授权的锁。
         * @example `AccessShareLock`
         */
        NotGrantLocks: string;
        /**
         * 阻塞该查询的进程ID。
         * @example `110`
         */
        BlockedByPID: string;
        /**
         * 阻塞该查询的执行用户。
         * @example `testUser1`
         */
        BlockedByUser: string;
        /**
         * 阻塞该查询的SQL文本。
         * @example `Select * from t1;`
         */
        BlockedBySQLStmt: string;
        /**
         * 阻塞该查询的查询所属应用。
         * @example `DataGrip 2022.1.5`
         */
        BlockedByApplication: string;
        /**
         * 授权的锁。
         * @example `ShareLock,AccessExclusiveLock`
         */
        GrantLocks: string;
    }[];
}
