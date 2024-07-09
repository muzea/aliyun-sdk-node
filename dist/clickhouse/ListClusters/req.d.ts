export interface ListClustersRequest {
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId"?: string;
    /**
     * 集群的状态，取值说明：
     * - **OrderPreparing**：订单确认中。
     * - **Creating**：创建中。
     * - **Running**：运行中。
     * - **ResourceChanging**：资源变配中。
     * - **ResourceChangingInReadonly**：资源变配中（实例写入锁定）。
     * - **Deleting**：删除中。
     * @example `Running`
     */
    "DBClusterStatus"?: string;
    /**
     * 集群描述。
     * @example `test`
     */
    "DBClusterDescription"?: string;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
