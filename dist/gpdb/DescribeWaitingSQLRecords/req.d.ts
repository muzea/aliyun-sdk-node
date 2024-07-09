export interface DescribeWaitingSQLRecordsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
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
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * 不填则表示没有查询开始时间，将返回查询结束时间之前所有锁诊断信息。如果也没有查询结束时间，将返回全部锁诊断信息。
     * @example `2022-08-15T06:59Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * 不填则表示没有查询结束时间，将返回查询开始时间之后所有锁诊断信息。如果也没有查询开始时间，将返回全部锁诊断信息。
     * @example `2022-08-20T07:59Z`
     */
    "EndTime"?: string;
    /**
     * 用户名。不填则表示查询所有用户的锁等待信息。
     * @example `testUser`
     */
    "User"?: string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "Database": string;
    /**
     * 查询过滤条件，取值如下：
     * - `{"Type":"maxCost","Value":"10"}`：等待时间最长的10个查询。
     * - `{"Type":"status","Value":"LockWaiting"}`：锁等待的查询。
     * - `{"Type":"status","Value":"ResourceWaiting"}`：资源等待的查询。
     * @example `{"Type":"maxCost","Value":"10"}`
     */
    "QueryCondition": string;
    /**
     * 查询关键字。
     * @example `table`
     */
    "Keyword"?: string;
    /**
     * 排序字段和排序方式。
     * 默认为`{"Field":"StartTime","Type":"Desc"}`，表示按开始时间进行排序。暂不支持其他排序字段和排序方式。
     * @example `{"Field":"StartTime","Type":"Desc"}`
     */
    "Order"?: string;
}
