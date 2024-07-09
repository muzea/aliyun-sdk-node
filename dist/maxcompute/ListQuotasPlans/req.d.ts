export interface ListQuotasPlansRequest {
    /**
     * Quota名称
     * @example `quotaA`
     */
    "nickname": string;
    /**
     * 租户id
     * @example `478403690625249`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-beijing`
     */
    "region"?: string;
}
