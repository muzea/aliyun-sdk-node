export interface UpgradeDBProxyInstanceKernelVersionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 升级时间，取值：
     * * **MaintainTime**（默认值）：在[可运维时间段](~~610402~~)内升级。
     * * **Immediate**：立即升级。
     * * **SpecifyTime**：在指定时间升级。
     * @example `MaintainTime`
     */
    "UpgradeTime"?: string;
    /**
     * 指定时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >如果**UpgradeTime**取值为**SpecifyTime**时，该参数必填。
     * @example `2019-07-10T13:15:12Z`
     */
    "SwitchTime"?: string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
