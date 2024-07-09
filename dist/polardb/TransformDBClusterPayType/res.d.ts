export interface TransformDBClusterPayTypeResponse {
    /**
     * 请求ID。
     * @example `5E71541A-6007-4DCC-A38A-F872C31FEB45`
     */
    RequestId: string;
    /**
     * 实例的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    ChargeType: string;
    /**
     * PolarDB集群ID。
     * @example `pc-bp10gr51qasnl****`
     */
    DBClusterId: string;
    /**
     * 实例的到期时间。
     * > 当**PayType**取值为**Prepaid**时，才支持该返回参数。
     * @example `2020-04-20T10:00:00Z`
     */
    ExpiredTime: string;
    /**
     * 订单ID。
     * @example `20515760028****`
     */
    OrderId: string;
}
