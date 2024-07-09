export interface GetQuotaPlanRequest {
    /**
     * Quota名称
     * @example `quotaA`
     */
    "nickname": string;
    /**
     * Quota计划名称
     * @example `planA`
     */
    "planName": string;
    /**
     * 租户id。
     * @example `483212237127906`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-beijing`
     */
    "region"?: string;
}
