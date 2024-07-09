export interface DescribeDBInstanceErrorLogRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 每页记录数，取值说明：
     * - **20**
     * - **50**
     * - **100**
     * 默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-04-24T06:59Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-04-25T06:59Z`
     */
    "EndTime"?: string;
    /**
     * 日志等级，取值如下：
     * - **ALL**：显示所有级别日志。
     * - **PANIC**：只显示异常级别日志。
     * - **FATAL**：只显示严重级别日志。
     * - **ERROR**：只显示错误级别日志。
     * @example `ALL`
     */
    "LogLevel"?: string;
    /**
     * 用户名。
     * @example `adbpguser`
     */
    "User"?: string;
    /**
     * 数据库名称。
     * @example `adbtest`
     */
    "Database"?: string;
    /**
     * 公共云暂不支持该参数，无需传入。
     * @example `null`
     */
    "Host"?: string;
    /**
     * 错误日志关键字。
     * @example `error`
     */
    "Keywords"?: string;
}
