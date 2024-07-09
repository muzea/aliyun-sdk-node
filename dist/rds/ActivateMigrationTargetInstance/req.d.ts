export interface ActivateMigrationTargetInstanceRequest {
    /**
     * 目标实例ID。可调用DescribeDBInstances接口查询。
     * @example `pgm-bp102g323jd4****`
     */
    "DBInstanceName": string;
    /**
     * 预留参数，暂不生效。
     * @example `2022-02-25T06:57:41Z`
     */
    "SwitchTime"?: string;
    /**
     * 切换上云时间模式。
     * 固定配置为0，表示立即切换。
     * @example `0`
     */
    "SwitchTimeMode"?: string;
    /**
     * 固定配置为1，表示强制切换。
     * @example `1`
     */
    "ForceSwitch"?: string;
}
