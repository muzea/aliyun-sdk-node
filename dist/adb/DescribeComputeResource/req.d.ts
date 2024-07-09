export interface DescribeComputeResourceRequest {
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AnalyticDB MySQL数仓版集群版本。取值：**3.0**。
     * @example `3.0`
     */
    "DBClusterVersion"?: string;
    /**
     * 可用区ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看可用区ID。
     * @example `cn-beijing-f`
     */
    "ZoneId"?: string;
    /**
     * 集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId"?: string;
    /**
     * 是否查询AnalyticDB MySQL数仓版迁移至AnalyticDB MySQL湖仓版的可用计算资源。取值：
     * - **true**
     * - **false**（默认值）
     * @example `false`
     */
    "Migrate"?: boolean;
}
