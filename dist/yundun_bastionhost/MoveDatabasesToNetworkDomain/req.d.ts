export interface MoveDatabasesToNetworkDomainRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-zpr3h2zo60l`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要移入的网络域ID。
     * > 您可以调用[ListNetworkDomains](~~2758827~~)接口获取该参数。
     * @example `3`
     */
    "NetworkDomainId": string;
    /**
     * 指定要移入网络域的数据库实例ID。
     */
    "DatabaseIds": string[];
}
