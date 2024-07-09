export interface CreateHostGroupRequest {
    /**
     * 指定新建资产组所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定新建资产组所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定新建的资产组名称，最多支持128字符。
     * @example `HostGroup01`
     */
    "HostGroupName": string;
    /**
     * 指定新建资产组的备注信息，最多支持500字符。
     * @example `Local host group`
     */
    "Comment"?: string;
}
