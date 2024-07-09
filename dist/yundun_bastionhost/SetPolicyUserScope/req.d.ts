export interface SetPolicyUserScopeRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要修改的控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `1`
     */
    "PolicyId": string;
    /**
     * 控制策略生效的用户范围。取值：
     * - **All**：策略针对所有用户生效
     * - **User**：策略针对已选择的用户生效
     * - **UserGroup**：策略针对已选择的用户组生效
     * @example `All`
     */
    "ScopeType": string;
    /**
     * 控制策略生效的用户范围。
     * >当ScopeType为 User 时必填，最多500 个。
     */
    "UserIds"?: string[];
    /**
     * 控制策略生效的用户组范围。
     * >当ScopeType为 UserGroup 时必填，最多100 个。
     */
    "UserGroupIds"?: string[];
}
