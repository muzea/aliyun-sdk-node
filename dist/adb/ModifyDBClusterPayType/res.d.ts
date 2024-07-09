export interface ModifyDBClusterPayTypeResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `am-bp11q28kvl688****`
     */
    DBClusterId: string;
    /**
     * 订单ID。
     * @example `2023532****`
     */
    OrderId: string;
    /**
     * 付费类型。取值说明：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：预付费（包年包月）。
     * @example `Prepaid`
     */
    PayType: string;
}
