export interface QueryPreCheckDatabaseResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F****`
     */
    RequestId: string;
    /**
     * 预检查进度。取值范围：0~100。
     * @example `100`
     */
    Progress: number;
    /**
     * 预检查任务结果。格式为JSON字符串，KEY取值：
     * - **instanceId**：数据库所在服务器实例ID
     * - **checkTime**：预检时间
     * - **sourceType**：数据库类型
     * - **results**：预检项与结果
     *     - **item**：预检项
     *     - **result**：预检结果
     * > 预检项说明
     * > - MSSQL
     * >     - **OSS\_INTERNAL\_ENDPOINT\_CONNECTIVITY：OSS**连接性检查
     * >     - **SERVICE\_CONNECTIVITY**：管控网络连接性检查
     * >     - **SQL\_SERVER\_DB\_IN\_SIMPLE\_RECOVERY\_MODE**：恢复模式检查
     * >     - **SQL\_SERVER\_DB\_NOT\_ONLINE**：SQL Server数据库状态检查
     * > - ORACLE
     * >     - **OSS\_INTERNAL\_ENDPOINT\_CONNECTIVITY：OSS**连接性检查
     * >     - **SERVICE\_CONNECTIVITY**：管控网络连接性检查
     * >     - **ORACLE\_INSTANCE\_STATUS**：Oracle实例状态检查
     * >     - **ORACLE\_DB\_STATUS**：Oracle数据库状态检查
     * >     - **ARCHIVELOG**：归档模式检查
     * > - MYSQL
     * >     - **OSS\_INTERNAL\_ENDPOINT\_CONNECTIVITY：OSS**连接性检查
     * >     - **SERVICE\_CONNECTIVITY**：管控网络连接性检查
     * >     - **MYSQL\_VERSION**：支持全量备份的版本检查
     * >     - **MYSQL\_BINLOG**：BINLOG检查
     * @example `[
        {
            "instanceId": "i-wz91if83t97xgtn2****",
            "checkTime": 1671245753,
            "sourceType": "MSSQL",
            "results":
            [
                {
                    "item": "OSS_INTERNAL_ENDPOINT_CONNECTIVITY",
                    "result": "PASSED"
                },
                {
                    "item": "SERVICE_CONNECTIVITY",
                    "result": "PASSED"
                },
                {
                    "item": "SQL_SERVER_DB_IN_SIMPLE_RECOVERY_MODE",
                    "result": "WARNING"
                },
                {
                    "item": "SQL_SERVER_DB_NOT_ONLINE",
                    "result": "PASSED"
                }
            ]
        }
    ]`
     */
    Result: string;
    /**
     * 预检查完成的时间。
     * @example `1657524396`
     */
    CompletedTime: number;
    /**
     * 预检查任务状态描述。取值如下：
     * - **completed**：已完成
     * - **created**：已开始
     * - **error**：预检失败
     * @example `completed`
     */
    Description: string;
    /**
     * 预检查最后更新的时间。
     * @example `1671084106`
     */
    UpdatedTime: number;
    /**
     * 预检查开始的时间。
     * @example `1660448660`
     */
    CreatedTime: number;
}
