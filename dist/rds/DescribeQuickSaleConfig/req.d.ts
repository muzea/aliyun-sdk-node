export interface DescribeQuickSaleConfigRequest {
    /**
     * 地域ID，您可以通过[DescribeRegions](~~26243~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据库类型，取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * `商品code
     * - rds：包年包月
     * - bards：按量付费
     * @example `rds`
     */
    "Commodity"?: string;
}
