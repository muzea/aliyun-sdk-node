export interface CreateBusinessOpportunityRequest {
    /**
     * 联系人名称
     * @example `魏先生`
     */
    "ContactName"?: string;
    /**
     * 手机号
     * @example `18704330000`
     */
    "Mobile": string;
    /**
     * 来源
     * @example `官网`
     */
    "Source": number;
    /**
     * 业务类型
     * @example `esp.hightech`
     */
    "BizType": string;
    /**
     * 验证码
     * @example `345674`
     */
    "VCode"?: string;
}
