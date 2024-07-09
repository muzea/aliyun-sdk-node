export interface GetPolicyAssetScopeRequest {
    /**
     * 堡垒机的实例ID。
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
     * 控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `7`
     */
    "PolicyId": string;
}
