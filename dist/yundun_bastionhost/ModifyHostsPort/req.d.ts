export interface ModifyHostsPortRequest {
    /**
     * 要修改协议端口的主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 要修改端口的主机所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要修改运维协议和端口的主机ID。该参数为JSON格式的字符串，最多可输入100个主机ID。多个主机ID之间使用半角逗号（,）隔开。
     * > 您可以调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `["1","2","3"]`
     */
    "HostIds": string;
    /**
     * 要修改端口的协议名称。取值：
     * - **SSH**
     * - **RDP**
     * @example `SSH`
     */
    "ProtocolName": string;
    /**
     * 修改后的端口号。端口号为整数，取值范围：22~65535。
     * @example `22`
     */
    "Port": string;
}
