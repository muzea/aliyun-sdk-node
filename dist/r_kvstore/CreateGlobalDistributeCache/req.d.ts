export interface CreateGlobalDistributeCacheRequest {
    /**
     * 待转换的实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "SeedSubInstanceId": string;
    /**
     * 资源组ID。
     * > 系统参数无需传入。
     * @example `-`
     */
    "ResourceGroupId"?: string;
    /**
     * 执行时间，取值：
     * * **Immediately**：立即执行。
     * * **MaintainTime**：在可维护时间段执行，默认值。
     * > 您可以调用[ModifyInstanceMaintainTime](~~61000~~)接口修改Redis实例的可维护时间段。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
}
