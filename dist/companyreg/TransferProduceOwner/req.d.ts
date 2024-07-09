export interface TransferProduceOwnerRequest {
    /**
     * 业务类型
     * @example `esp.companyreg_cloud`
     */
    "BizType": string;
    /**
     * 业务ID
     * @example `P20210208152920000001`
     */
    "BizId": string;
    /**
     * 小二ID
     * @example `15565`
     */
    "PersonId": number;
    /**
     * 备注
     * @example `无`
     */
    "Remark"?: string;
}
