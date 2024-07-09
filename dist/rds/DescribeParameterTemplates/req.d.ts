export interface DescribeParameterTemplatesRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 数据库类型，取值：
     * * **mysql**：MySQL数据库
     * * **mssql**：SQL Server数据库
     * * **PostgreSQL**：PostgreSQL数据库
     * * **MariaDB**：MariaDB数据库
     * @example `mysql`
     */
    "Engine": string;
    /**
     * 数据库版本号，取值：
     * * MySQL数据库：**5.5、5.6、5.7、8.0**
     * * SQL Server数据库：**2008r2**
     * * PostgreSQL数据库：**10.0、11.0、12.0、13.0、14.0、15.0**
     * * MariaDB数据库：**10.3**
     * @example `8.0`
     */
    "EngineVersion": string;
    /**
     * 实例系列，取值：
     * - **Basic**：基础系列
     * - **HighAvailability**：高可用系列
     * - **Finance**：三节点企业系列
     * @example `Basic`
     */
    "Category"?: string;
    /**
     * 地域ID。可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `rm-bp1imnm****`
     */
    "DBInstanceId"?: string;
}
