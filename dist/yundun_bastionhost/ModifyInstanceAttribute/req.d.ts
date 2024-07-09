export interface ModifyInstanceAttributeRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    "InstanceId": string;
    /**
     * 堡垒机实例的描述信息。
     * > 只能包含字母、汉字、数字、下划线（_）或短划线（-），长度不能超过30字符。
     * @example `Bastionhost demo`
     */
    "Description"?: string;
    /**
     * 堡垒机实例的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
