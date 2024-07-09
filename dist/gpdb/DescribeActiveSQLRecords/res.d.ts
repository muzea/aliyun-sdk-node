export interface DescribeActiveSQLRecordsResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * 详情。
     */
    Queries: {
        /**
         * 进程ID。
         * @example `6164`
         */
        PID: string;
        /**
         * 查询所属的会话ID。
         * @example `6612`
         */
        SessionID: string;
        /**
         * 异步请求的执行状态。取值说明：
         * - **running**：运行中。
         * - **block**：阻塞中。
         * @example `running`
         */
        State: string;
        /**
         * 查询起始时间。
         * @example `2022-05-07T06:59Z`
         */
        QueryStart: string;
        /**
         * 查询运行时间。单位为秒（s）。
         * @example `60`
         */
        QueryDuration: string;
        /**
         * 查询对应的SQL文本。
         * @example `Select * from t1,t2 where t1.id=t2.id;`
         */
        Query: string;
        /**
         * 用户名。
         * @example `testuser`
         */
        User: string;
        /**
         * 数据库名称。
         * @example `xg_analyse`
         */
        Database: string;
        /**
         * 客户端地址。
         * @example `0.0.0.0`
         */
        ClientAddr: string;
        /**
         * SQL语句是否截断。取值说明：
         * - true：是。
         * - false：否。
         * @example `false`
         */
        SqlTruncated: string;
        /**
         * SQL语句截断阈值。
         * @example `1024`
         */
        SqlTruncatedThreshold: string;
    }[];
}
