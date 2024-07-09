export interface TransferIntentionOwnerRequest {
    /**
     * 业务类型
     * @example `esp.wangwen`
     */
    "BizType": string;
    /**
     * 业务ID
     * @example `P20210709190452000001`
     */
    "BizId": string;
    /**
     * 小二ID
     * @example `67842`
     */
    "PersonId": number;
    /**
     * 备注
     * @example `无`
     */
    "Remark"?: string;
}
