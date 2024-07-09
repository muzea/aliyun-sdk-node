export interface DownloadDiagnosisRecordsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
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
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-05-07T06:59Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-05-07T07:59Z`
     */
    "EndTime"?: string;
    /**
     * 查询过滤条件，JSON格式，取值如下：
     * - `{"Type":"maxCost", "Value":"100"}`：耗时最长的100个查询。
     * - `{"Type":"status","Value":"finished"}`：已完成的查询。
     * - `{"Type":"status","Value":"running"}`：运行中的查询。
     * - `{"Type":"cost","Max":"200"}`：短耗时查询，执行耗时小于200毫秒的查询。
     * - `{"Type":"cost","Min":"200","Max":"60000"}`：中等耗时查询，执行耗时大于等于200毫秒且小于1分钟的查询。
     * - `{"Type":"cost","Min":"60000"}`：长耗时查询，执行耗时大于等于1分钟的查询。
     * - `{"Type":"cost","Min":"30","Max":"50"}`：自定义耗时查询，您可以自定义设置查询的最短耗时和最长耗时，**Min**表示最短耗时；**Max**表示最长耗时，单位为毫秒（ms）。
     * @example `{ "Type":"maxCost", "Value":"100" }`
     */
    "QueryCondition"?: string;
    /**
     * 下载文件的语言，取值如下：
     * - **zh**：简体中文。
     * - **en**：英文。
     * - **ja**：日语。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
}
