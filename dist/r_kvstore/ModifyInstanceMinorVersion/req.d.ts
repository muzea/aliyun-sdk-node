export interface ModifyInstanceMinorVersionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 要升级到的小版本，默认值：**latest_version**，即最新版本。
     * @example `latest_version`
     */
    "Minorversion"?: string;
    /**
     * 升级执行时间，取值：
     * * **Immediately**：立即执行，默认值。
     * * **MaintainTime**：在可维护时间段执行。
     * > 您可以调用[ModifyInstanceMaintainTime](~~61000~~)修改Redis实例的可维护时间段。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
}
