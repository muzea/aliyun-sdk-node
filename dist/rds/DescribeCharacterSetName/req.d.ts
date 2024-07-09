export interface DescribeCharacterSetNameRequest {
    /**
     * 数据库引擎类型。取值：
     * - **mysql**：MySQL
     * - **mssql**：SQL Server
     * - **PostgreSQL**：PostgreSQL
     * - **MariaDB**：MariaDB
     * @example `mysql`
     */
    "Engine": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
