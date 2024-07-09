export interface DescribeAuditLogRecordsResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 每页记录数。
     * @example `10`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `8A564B7F-8C00-43C0-8EC5-919FBB70573`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 集群ID。
     * @example `am-t4nj8619bz2w3****`
     */
    DBClusterId: string;
    /**
     * SQL审计日志详情。
     */
    Items: {
        /**
         * 执行目标SQL的客户端IP地址和端口号。
         * @example `100.104.XX.XX:43908`
         */
        HostAddress: string;
        /**
         * 目标SQL是否执行成功。取值说明：
         * - **true**：执行成功。
         * - **false**：执行失败。
         * @example `true`
         */
        Succeed: string;
        /**
         * SQL语句详情。
         * @example `SELECT * FROM tb_courses`
         */
        SQLText: string;
        /**
         * 目标SQL的执行时长，单位：毫秒（ms）。
         * @example `216`
         */
        TotalTime: string;
        /**
         * 此参数无效。
         * @example `无`
         */
        ConnId: string;
        /**
         * 执行目标SQL的数据库名称。
         * @example `adb_test`
         */
        DBName: string;
        /**
         * 目标SQL的类型。
         * @example `SELECT`
         */
        SQLType: string;
        /**
         * 目标SQL的执行开始时间，本地时间，格式为：yyyy-MM-dd HH:mm:ss。
         * @example `2022-01-23 16:05:08`
         */
        ExecuteTime: string;
        /**
         * 任务ID。
         * @example `202106081752021720161662490345362390`
         */
        ProcessID: string;
        /**
         * 执行目标SQL的用户名。
         * @example `test_user`
         */
        User: string;
    }[];
}
