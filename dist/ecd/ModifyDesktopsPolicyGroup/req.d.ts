export interface ModifyDesktopsPolicyGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 策略ID。
     * @example `pg-gx2x1dhsmthe9****`
     */
    "PolicyGroupId"?: string;
    /**
     * 云桌面ID。可设置一个或者多个，格式为JSON数组。
     * @example `ecd-ia2zw38bi6cm7****`
     */
    "DesktopId": string[];
    /**
     * 策略ID列表。
     */
    "PolicyGroupIds"?: string[];
}
