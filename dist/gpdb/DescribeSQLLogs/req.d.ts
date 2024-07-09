export interface DescribeSQLLogsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL版实例的实例ID。
     * @example `gp-xxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * SQL关键字。
     * @example `select 1`
     */
    "QueryKeywords"?: string;
    /**
     * 查询开始时间。格式为<i>YYYY-MM-DDThh:mmZ</i>（UTC时间）。
     * @example `2021-03-10T06:30Z`
     */
    "StartTime": string;
    /**
     * 数据库名称。
     * @example `adbpgadmin`
     */
    "Database"?: string;
    /**
     * 用户名。
     * @example `testadmin`
     */
    "User"?: string;
    /**
     * 查询结束时间。格式为<i>YYYY-MM-DDThh:mmZ</i>（UTC时间）。
     * > 查询结束时间需晚于开始时间，且开始时间和结束时间的时间间隔不能超过七天。
     * @example `2021-03-17T06:30Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 执行耗时，单位为秒（s）。
     * @example `1`
     */
    "ExecuteCost"?: string;
    /**
     * 来源IP。
     * @example `100.**.**.90`
     */
    "SourceIP"?: string;
    /**
     * 执行状态。取值如下：
     * - **1**：成功。
     * - **0**：失败。
     * @example `1`
     */
    "ExecuteState"?: string;
    /**
     * 操作类别，取值如下：
     * - **DQL**
     * - **DML**
     * - **DDL**
     * - **DCL**
     * - **TCL**
     * @example `DQL`
     */
    "OperationClass"?: string;
    /**
     * 执行SQL的类型。
     * >- 如果设置了**OperationClass**参数，则**OperationType**的值必须属于对应的语言类型。例如**OperationClass**的值为**DQL**，则**OperationType**的值必须为**DQL**类型的SQL，例如**SELECT**。
     * - 如果没有设置**OperationClass**参数，则**OperationType**的值可以是任意类型SQL。
     * - 如果没有设置**OperationClass**参数也没有设置**OperationType**参数，则表示返回所有类型SQL。
     * @example `SELECT`
     */
    "OperationType"?: string;
    /**
     * 慢SQL最大耗时，取值需大于等于0，单位为秒（s）。
     * @example `1000`
     */
    "MaxExecuteCost"?: string;
    /**
     * 慢SQL最小耗时，取值需大于等于0，单位为秒（s）。
     * @example `1`
     */
    "MinExecuteCost"?: string;
}
