export interface QueryAvatarRequest {
    /**
     * 从虚拟数字人开放平台中获取的TenantId
     * @example `9185`
     */
    "TenantId": number;
    /**
     * 在开放平台资产中心处查到的数字人形象code。
     * @example `CH_2d_xxxxxx`
     */
    "Code": string;
}
