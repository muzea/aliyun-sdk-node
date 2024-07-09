export interface UpgradeDBInstanceMajorVersionResponse {
    /**
     * 实例ID。
     * @example `pgm-bp1gm3yh0ht1****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `006729E5-2A33-5955-89E3-651D3F44EBE6`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `21128667463****`
     */
    OrderId: string;
    /**
     * 预留参数。
     * @example `416980000`
     */
    TaskId: number;
}
