export interface GetQuotaRequest {
    /**
     * Quota名称
     * @example `%E9%BB%98%E8%AE%A4%E9%A2%84%E4%BB%98%E8%B4%B9Quota_p
    
    #中文名称需要经过utf8 urlencode编码转义`
     */
    "nickname": string;
    /**
     * 租户id
     * @example `520539530998273`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-chengdu`
     */
    "region"?: string;
    /**
     * ak 换取凭证
     * @example `null`
     */
    "AkProven"?: string;
    /**
     * 是否包含子模块。取值：-true：包含。-false（默认值）：不包含。
     * @example `false`
     */
    "mock"?: boolean;
}
