export interface DeletePolicyRequest {
    /**
     * 要删除的控制策略所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除的控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `1`
     */
    "PolicyId": string;
}
