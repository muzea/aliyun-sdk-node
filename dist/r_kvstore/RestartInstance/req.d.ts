export interface RestartInstanceRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 重启时间，取值：
     * * **Immediately**：默认值，立即重启。
     * * **MaintainTime**：可运维时间段重启。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 重启时是否将小版本升级到最新版，取值：
     * * **true**：升级小版本。
     * * **false**：不升级小版本。
     * > 默认值：**true**。
     * @example `true`
     */
    "UpgradeMinorVersion"?: boolean;
}
