export interface ModifyDBInstanceMetricsResponse {
    /**
     * 实例ID。
     * @example `pgm-bp1s1j103lo6****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `B55934BB-FFAA-5276-80A8-E0FDB12810B3`
     */
    RequestId: string;
    /**
     * 本次变更的应用范围。返回值：
     * * **instance**：实例级别。
     * * **region**：地域级别。
     * @example `instance`
     */
    Scope: string;
}
