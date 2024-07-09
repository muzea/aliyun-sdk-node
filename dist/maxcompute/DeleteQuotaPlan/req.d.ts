export interface DeleteQuotaPlanRequest {
    /**
     * QuotaNickName
     * @example `quota_A`
     */
    "nickname": string;
    /**
     * Quota计划名称
     * @example `planA`
     */
    "planName": string;
    /**
     * 租户ID。
     * @example `416441016836866`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "region"?: string;
}
