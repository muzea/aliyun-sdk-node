export interface CreateProduceForPartnerRequest {
    /**
     * 业务类型
     * @example `esp.hightech`
     */
    "BizType": string;
    /**
     * 扩展信息
     * @example `{\"consultBusiness\":\"自助记账咨询\"}`
     */
    "ExtInfo"?: string;
    /**
     * 交付单ID
     * @example `P20210301102840000001`
     */
    "BizId": string;
}
