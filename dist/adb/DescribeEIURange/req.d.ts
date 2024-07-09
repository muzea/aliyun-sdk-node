export interface DescribeEIURangeRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * - 当**Operation**为**Buy**时，该参数可以为空。
     * -  当**Operation**为**Upgrade**或**Downgrade**时，该参数必填。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp16t5ci7r74s****`
     */
    "DBClusterId"?: string;
    /**
     * 计算资源规格。
     * >您可以调用[DescribeComputeResource](~~469002~~)接口查看计算资源规格。
     * @example `{
          "RealValue": "32Core128GBNEW",
          "DisplayValue": "32Core128GB"
        }`
     */
    "ComputeResource"?: string;
    /**
     * 操作类型，取值说明：
     * - **Buy**：新购集群。
     * - **Modify**：变配集群。
     * @example `Buy`
     */
    "Operation"?: string;
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看集群的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AnalyticDB MySQL数仓版集群的版本。取值：**3.0**。
     * @example `3.0`
     */
    "DBClusterVersion"?: string;
    /**
     * 可用区ID。
     * >您可以调用[DescribeDBClusters](~~612293~~)接口查看集群的可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 存储资源规格，默认规格为**8ACU**，取值范围：
     * - **8ACU**
     * - **12ACU**
     * - **16ACU**
     * @example `8ACU`
     */
    "StorageSize"?: string;
    /**
     * 子操作类型，取值说明：
     * - **Upgrade**：升配集群。
     * - **Downgrade**：降配集群。
     * @example `Upgrade`
     */
    "SubOperation"?: string;
}
