export interface ModifyHostsActiveAddressTypeRequest {
    /**
     * 要修改连接地址类型的主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw***`
     */
    "InstanceId": string;
    /**
     * 要修改连接地址类型的主机所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要修改连接地址类型的主机ID。该参数为JSON格式的字符串，最多可输入100个主机ID。
     * 您可以调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `["1","2"]`
     */
    "HostIds": string;
    /**
     * 修改后的主机连接地址的类型。取值：
     * - **Public**：公网
     * - **Private**：私网
     * @example `Private`
     */
    "ActiveAddressType": string;
}
