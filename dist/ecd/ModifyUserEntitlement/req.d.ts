export interface ModifyUserEntitlementRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用户ID（即用户名）列表。
     */
    "EndUserId"?: string[];
    /**
     * 要新增授权用户的云电脑ID列表。
     */
    "AuthorizeDesktopId"?: string[];
    /**
     * 要删除授权用户的云电脑ID列表。
     */
    "RevokeDesktopId"?: string[];
}
