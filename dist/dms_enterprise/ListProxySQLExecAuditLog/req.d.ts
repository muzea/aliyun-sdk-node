export interface ListProxySQLExecAuditLogRequest {
    /**
     * 开始操作的时间戳，格式为标准的UNIX_TIMESTAMP时间戳形式，您可以根据您的操作时间进行转化。
     * @example `1636876446000`
     */
    "StartTime": number;
    /**
     * 结束操作的时间戳，格式为标准的UNIX_TIMESTAMP时间戳形式，您可以根据您的操作时间进行转化。
     * @example `1636962846000`
     */
    "EndTime": number;
    /**
     * 实例名称。
     * @example `test`
     */
    "SearchName"?: string;
    /**
     * 操作人昵称。
     * @example `testNickName`
     */
    "OpUserName"?: string;
    /**
     * SQL类型，常见SQL类型取值说明如下：
     * - **SELECT**：查询
     * - **INSERT**：插入
     * - **DELETE**：删除
     * - **CREATE_TABLE**：创建表
     * > 您可以在控制台页面上方操作审计->安全访问代理中查看更多SQL类型取值。
     * @example `SELECT`
     */
    "SQLType"?: string;
    /**
     * 执行状态，取值说明如下：
     * - **FAIL**：执行失败
     * - **CANCEL**：取消执行
     * - **SUCCESS**：执行成功
     * @example `SUCCESS`
     */
    "ExecState"?: string;
    /**
     * 每页数据量，最大值不超过100。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 开始页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `14****`
     */
    "Tid"?: number;
}
