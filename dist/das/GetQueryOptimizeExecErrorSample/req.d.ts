export interface GetQueryOptimizeExecErrorSampleRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **PolarDBMySQL**
     * - **PostgreSQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * SQL模板ID，您可调用[GetQueryOptimizeExecErrorStats](~~405235~~)接口查询SQL模板ID。
     * @example `2e8147b5ca2dfc640dfd5e43d96a****`
     */
    "SqlId": string;
    /**
     * 查询数据的日期，格式为Unix时间戳，单位为毫秒。
     * @example `1642953600000`
     */
    "Time": string;
}
