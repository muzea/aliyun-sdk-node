export interface ListSQLExecAuditLogRequest {
    /**
     * 开始操作的时间。
     * > 开始时间可模糊输入，时间格式为YYYY-MM-DD hh:mm:ss。
     * @example `2021-11-08 11:04:00`
     */
    "StartTime": string;
    /**
     * 结束操作的时间。
     * > 结束时间可模糊输入，时间格式为YYYY-MM-DD hh:mm:ss，建议您输入的开始时间和结束时间间隔不要超过一天，方便分页拉取，提升效率。
     * @example `2021-11-08 11:00:00`
     */
    "EndTime": string;
    /**
     * 搜索名称。
     * > 此处的搜索名称可输入数据库名，如果是实例级别的SQL操作，则可输入实例名称。
     * @example `test_SearchName`
     */
    "SearchName"?: string;
    /**
     * 操作人昵称。
     * @example `test_OpUserName`
     */
    "OpUserName"?: string;
    /**
     * SQL类型，常见SQL类型取值说明如下：
     * - **SELECT**：查询
     * - **INSERT**：插入
     * - **DELETE**：删除
     * - **CREATE_TABLE**：创建表
     * > 您可以在控制台页面上方**操作审计**->**SQL类型**中查看更多SQL类型取值。
     * @example `SELECT`
     */
    "SqlType"?: string;
    /**
     * 执行状态，取值说明如下：
     * - **-1**：执行失败
     * - **0**：暂未执行
     * - **2**：执行中
     * - **-2**：取消执行
     * - **1**：执行成功
     * @example `1`
     */
    "ExecState"?: string;
    /**
     * 每页数据量。最大值不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始页码。请输入合理的页码，若页码填写超过日志总页数，可能会操作总记录数不为0，但是操作审计日志列表信息为空的情况。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
