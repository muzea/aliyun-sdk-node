export interface DescribeActiveSQLRecordsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 数据库名，默认为所有数据库。
     * @example `testdb`
     */
    "Database"?: string;
    /**
     * 用户名。
     * @example `testuser`
     */
    "User"?: string;
    /**
     * 查询开始日期，格式：`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2021-08-03T09:30Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，格式如：yyyy-MM-ddTHH:mm:ssZ，且大于查询开始时间。
     * @example `2022-05-07T07:59Z`
     */
    "EndTime"?: string;
    /**
     * 查询关键字。
     * @example `SELECT`
     */
    "Keyword"?: string;
    /**
     * 大于某个时间跨度范围，单位为秒（s）。例如，100表示大于100秒的数据。
     * @example `300`
     */
    "MinDuration"?: string;
    /**
     * 小于某个时间跨度范围，单位为秒（s）。
     * @example `600`
     */
    "MaxDuration"?: string;
    /**
     * 排序字段和排序方式。
     * 默认为`{"Field":"StartTime","Type":"Desc"}`，表示按开始时间进行排序。暂不支持其他排序字段和排序方式。
     * @example `{"Field":"StartTime","Type":"Desc"}`
     */
    "Order"?: string;
}
