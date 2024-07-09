export interface DeleteAvatarRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `9185`
     */
    "TenantId": number;
    /**
     * 形象code
     * @example `CH_2d_xxxxxx`
     */
    "Code": string;
}
