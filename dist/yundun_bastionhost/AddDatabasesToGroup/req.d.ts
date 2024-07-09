export interface AddDatabasesToGroupRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要加入数据库的资产组ID。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取该参数。
     * @example `1`
     */
    "HostGroupId": string;
    /**
     * 数据库ID组成的数组。
     */
    "DatabaseIds": string[];
}
