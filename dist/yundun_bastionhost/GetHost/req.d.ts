export interface GetHostRequest {
    /**
     * 指定要查询的主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的主机所在堡垒机的区域ID。
     * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询的主机ID。仅支持输入一个主机ID。
     * > 您可以调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `1`
     */
    "HostId": string;
}
