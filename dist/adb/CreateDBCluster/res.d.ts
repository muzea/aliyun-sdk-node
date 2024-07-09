export interface CreateDBClusterResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    ResourceGroupId: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1r053byu48p****`
     */
    DBClusterId: string;
    /**
     * 订单ID。
     * @example `202353278****`
     */
    OrderId: string;
}
