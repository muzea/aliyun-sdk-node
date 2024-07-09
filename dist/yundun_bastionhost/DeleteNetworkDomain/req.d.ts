export interface DeleteNetworkDomainRequest {
    /**
     * 指定要删除的网络域所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost_std_intl-sg-uq833e2dz02`
     */
    "InstanceId": string;
    /**
     * 指定要删除的网络域所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除的网络域ID。
     * @example `2`
     */
    "NetworkDomainId": string;
}
