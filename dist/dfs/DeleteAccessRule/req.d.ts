export interface DeleteAccessRuleRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
    /**
     * 待删除的权限组规则ID。
     * @example `acr-c38028f0-f313-4385-9456-3501b1f5****`
     */
    "AccessRuleId": string;
}
