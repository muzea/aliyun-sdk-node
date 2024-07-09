export interface UpdateGtmRecoveryPlanRequest {
    /**
     * 用户语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 容灾预案ID
     * @example `100`
     */
    "RecoveryPlanId": number;
    /**
     * 容灾预案名称
     * @example `abc`
     */
    "Name"?: string;
    /**
     * 备注
     * @example `remark`
     */
    "Remark"?: string;
    /**
     * 故障地址池列表
     * @example `["hra0or"]`
     */
    "FaultAddrPool"?: string;
}
