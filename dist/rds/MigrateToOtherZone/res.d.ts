export interface MigrateToOtherZoneResponse {
    /**
     * 请求ID。
     * @example `65BDA532-28AF-4122-AA39-B382721EEE64`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 订单ID，仅MySQL实例适用。
     * @example `21334157599****`
     */
    OrderId: number;
}
