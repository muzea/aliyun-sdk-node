export interface RemoveHostsFromGroupRequest {
    /**
     * 要移除主机的资产组所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 要移除主机的资产组所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要移除主机的资产组ID。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取该参数。
     * @example `1`
     */
    "HostGroupId": string;
    /**
     * 要移除的主机ID。该参数为JSON格式的字符串，最多支持输入100个主机ID。
     * > 您可以调用[ListHosts](~~200665~~)接口获取主机ID。
     * @example `["1","2","3"]`
     */
    "HostIds": string;
}
