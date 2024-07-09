export interface ModifyInstanceMajorVersionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 升级实例版本。
     * - <props="china">云原生版</props><props="intl">云盘版</props>实例可升级的大版本取值：6.0或7.0。
     * - <props="china">经典版</props><props="intl">本地盘版</props>实例可升级的大版本取值：4.0（不推荐）或5.0。
     * > 仅支持升级至相同部署模式。
     * @example `5.0`
     */
    "MajorVersion": string;
    /**
     * 升级执行时间，取值：
     * * **Immediately**：立即执行，默认值。
     * * **MaintainTime**：在可维护时间段执行。
     * > 您可以调用[ModifyInstanceMaintainTime](~~61000~~)修改Redis实例的可维护时间段。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
}
