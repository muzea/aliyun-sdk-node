export interface DescribeSQLLogCountRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL版实例的详情，包括实例ID。
     * @example `gp-xxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 查询关键词。
     * @example `test`
     */
    "QueryKeywords"?: string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-12-12T11:22Z`
     */
    "StartTime": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "Database"?: string;
    /**
     * 数据库用户名。
     * @example `adbpgadmin`
     */
    "User"?: string;
    /**
     * 查询结束时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * > 查询结束时间需晚于开始时间，且开始时间和结束时间的时间间隔不能超过七天。
     * @example `2020-12-14T11:22Z`
     */
    "EndTime": string;
    /**
     * 执行时长，单位为秒（s）。
     * @example `100`
     */
    "ExecuteCost"?: string;
    /**
     * 来源IP。
     * @example `10.**.**.13`
     */
    "SourceIP"?: string;
    /**
     * 执行状态。取值如下：
     * - 取值为1：成功
     * - 取值为0：失败
     * - 取值为0,1或1,0：全部
     * @example `1`
     */
    "ExecuteState"?: string;
    /**
     * 操作类别。取值如下：
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
     * @example `10`
     */
    "MinExecuteCost"?: string;
}
