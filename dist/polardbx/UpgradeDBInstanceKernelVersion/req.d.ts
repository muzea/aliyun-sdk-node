export interface UpgradeDBInstanceKernelVersionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 切换模式。取值：
     * - 0：立即切换。
     * - 1：在可运维时间段内切换。
     * @example `0`
     */
    "SwitchMode"?: string;
    /**
     * 内核版本。
     * @example `polarx-kernel_5.4.12-16349923_xcluster-20210926`
     */
    "MinorVersion"?: string;
}
