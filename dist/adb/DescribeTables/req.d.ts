export interface DescribeTablesRequest {
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 数据库名称。
     *
     * @example `adb_demo`
     */
    "SchemaName": string;
}
