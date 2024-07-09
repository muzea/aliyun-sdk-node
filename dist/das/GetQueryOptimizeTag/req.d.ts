export interface GetQueryOptimizeTagRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**：RDS MySQL
     * - **PolarDBMySQL**：PolarDB MySQL版
     * - **PostgreSQL**：RDS PostgreSQL
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * SQL模板ID。
     * 您可调用[GetQueryOptimizeDataStats](~~405261~~)接口查询SQL模板ID。
     * @example `29d9fef63e347d39c3436658a5fe****`
     */
    "SqlId": string;
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
}
