export interface UpgradeDBInstanceMajorVersionPrecheckResponse {
    /**
     * 实例名称。
     * @example `pgm-bp1c808s731l****`
     */
    DBInstanceName: string;
    /**
     * 目标实例版本。
     * @example `12.0`
     */
    TargetMajorVersion: string;
    /**
     * 请求ID。
     * @example `99C1FEEE-FB44-5342-8EBA-DC1E1A1557A4`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `41698****`
     */
    TaskId: string;
}
