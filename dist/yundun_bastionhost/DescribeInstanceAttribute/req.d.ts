export interface DescribeInstanceAttributeRequest {
    /**
     * 要查询的堡垒机实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询的堡垒机的实例的ID。
     *  > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1ghxxxxx`
     */
    "InstanceId": string;
}
