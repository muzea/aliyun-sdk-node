export interface StartInstanceRequest {
    /**
     * 要启用的堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    "InstanceId": string;
    /**
     * 堡垒机实例绑定的交换机ID。
     * @example `vsw-bp1xfwzzfti0kjbf****`
     */
    "VswitchId"?: string;
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 堡垒机实例绑定的安全组ID列表。
     * @example `sg-bp1aiupc4yjqgmm****`
     */
    "SecurityGroupIds": string[];
}
