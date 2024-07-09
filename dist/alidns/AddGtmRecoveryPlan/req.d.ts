export interface AddGtmRecoveryPlanRequest {
    /**
     * 用户语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 容灾预案名称
     * @example `name-example`
     */
    "Name": string;
    /**
     * 备注
     * @example `remark`
     */
    "Remark"?: string;
    /**
     * 故障地址池ID列表
     * @example `["hra0or"]`
     */
    "FaultAddrPool": string;
}
