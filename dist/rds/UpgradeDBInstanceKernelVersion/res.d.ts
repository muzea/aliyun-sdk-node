export interface UpgradeDBInstanceKernelVersionResponse {
    /**
     * 实例ID。
     * @example `rm-bp****`
     */
    DBInstanceName: string;
    /**
     * 升级的目标内核小版本。
     * @example `xcluster80_20210305`
     */
    TargetMinorVersion: string;
    /**
     * 请求ID。
     * @example `DA2ECBA0-4745-4491-9166-799FF8984AC9`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `226917711`
     */
    TaskId: string;
}
