export interface ClonePolicyGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要克隆的目标策略ID。
     * @example `pg-gx2x1dhsmthe9****`
     */
    "PolicyGroupId": string;
    /**
     * 策略名称。
     * @example `testPolicyGroupName`
     */
    "Name": string;
}
