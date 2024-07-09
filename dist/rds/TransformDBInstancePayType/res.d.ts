export interface TransformDBInstancePayTypeResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `5E6E09DE-5B12-4BFF-A55E-1C86EDE06D9A`
     */
    RequestId: string;
    /**
     * 到期时间。
     * >如果变更为按量付费，该参数不返回。
     * @example `2020-04-20T10:00:00Z`
     */
    ExpiredTime: string;
    /**
     * 订单ID。
     * @example `20515760028****`
     */
    OrderId: number;
    /**
     * 付费类型。
     * - 按量付费：POSTPAY
     * - 包年包月：PREPAY
     * @example `POSTPAY`
     */
    ChargeType: string;
}
