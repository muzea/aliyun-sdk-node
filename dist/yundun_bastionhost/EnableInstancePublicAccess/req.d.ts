export interface EnableInstancePublicAccessRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    "InstanceId": string;
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
