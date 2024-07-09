export interface DescribeDiagnosisMonitorPerformanceRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-05-07T06:59Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-05-07T07:59Z`
     */
    "EndTime"?: string;
    /**
     * 用户名。
     * @example `adbpguser`
     */
    "User"?: string;
    /**
     * 数据库名称。
     * @example `adbtest`
     */
    "Database": string;
    /**
     * 查询过滤条件，JSON格式，取值如下：
     * - `{"Type":"maxCost", "Value":"100"}`：耗时最长的100个查询。
     * - `{"Type":"status","Value":"finished"}`：已完成的查询。
     * - `{"Type":"status","Value":"running"}`：运行中的查询。
     * - `{"Type":"cost","Min":"30","Max":"50"}`：自定义耗时查询，您可以自定义设置查询的最短耗时和最长耗时，**Min**表示最短耗时；**Max**表示最长耗时，单位为毫秒（ms）。
     *     - 仅设置**Min**表示查询执行耗时大于该值的查询。
     *     - 仅设置**Max**表示查询执行耗时小于该值的查询。
     *     - 设置**Min**和**Max**表示查询耗时大于等于**Min**的值且小于等于**Max**的值的查询。
     * @example `{"Type":"maxCost", "Value":"100"}`
     */
    "QueryCondition"?: string;
}
