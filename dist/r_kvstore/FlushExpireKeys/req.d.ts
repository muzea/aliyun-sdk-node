export interface FlushExpireKeysRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 执行时间，取值：
     * * **Immediately**：立即执行，默认值。
     * * **MaintainTime**：在可维护时间段执行。
     * > 您可以调用[ModifyInstanceMaintainTime](~~61000~~)接口修改Redis实例的可维护时间段。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
}
