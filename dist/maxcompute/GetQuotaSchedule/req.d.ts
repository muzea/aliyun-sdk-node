export interface GetQuotaScheduleRequest {
    /**
     * Quota名称
     * @example `%E9%BB%98%E8%AE%A4%E9%A2%84%E4%BB%98%E8%B4%B9Quota_p
    
    #中文名称需要经过utf8 urlencode编码转义`
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
    /**
     * 显示时区
     * @example `UTC+8`
     */
    "displayTimezone"?: string;
}
