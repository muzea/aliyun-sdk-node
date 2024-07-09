export interface DsgQuerySensResultRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
    /**
     * 数据库类型，取值为：
     * - **ODPS.ODPS**
     * - **HOLO.POSTGRES**
     * - **EMR**
     * @example `ODPS.ODPS`
     */
    "DbType"?: string;
    /**
     * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
     * @example `project`
     */
    "ProjectName"?: string;
    /**
     * Schema名称。
     * @example `schema`
     */
    "SchemaName"?: string;
    /**
     * 表名称。
     * @example `table`
     */
    "Table"?: string;
    /**
     * 字段名称。
     * @example `col`
     */
    "Col"?: string;
    /**
     * 分类节点名称。
     * @example `个人信息`
     */
    "NodeName"?: string;
    /**
     * 敏感字段等级。
     * @example `3`
     */
    "Level"?: string;
    /**
     * 字段敏感状态：
     * - 1：敏感
     * - -1：非敏感
     * @example `1`
     */
    "SensStatus"?: string;
    /**
     * 敏感字段ID。
     * @example `10241024`
     */
    "SensitiveId"?: string;
    /**
     * 敏感字段名称。
     * @example `姓名`
     */
    "SensitiveName"?: string;
    /**
     * 排序方式：
     * - DESC：降序。
     * - ASC：升序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 用于排序的字段：
     * - gmt_create
     * - gmt_modified
     * @example `gmt_create`
     */
    "OrderField"?: string;
    /**
     * 页码数，最小值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为20条。
     * @example `10`
     */
    "PageSize"?: number;
}
