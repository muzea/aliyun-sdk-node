export interface DeletePolicyGroupsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 策略ID。可设置1~100个。
     * @example `pg-gx2x1dhsmthe9****`
     */
    "PolicyGroupId": string[];
}
