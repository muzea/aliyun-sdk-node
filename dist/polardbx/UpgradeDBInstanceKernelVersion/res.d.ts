export interface UpgradeDBInstanceKernelVersionResponse {
    /**
     * 实例名称ID。
     * @example `pxc-hzjasd****`
     */
    DBInstanceName: string;
    /**
     * 目标版本号。
     * @example `polarx-kernel_5.4.7-16001481_xcluster-20200910`
     */
    TargetMinorVersion: string;
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 后端任务ID。
     * @example `422922413`
     */
    TaskId: string;
}
