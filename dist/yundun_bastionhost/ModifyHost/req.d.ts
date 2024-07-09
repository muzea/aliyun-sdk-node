export interface ModifyHostRequest {
    /**
     * 指定要修改的主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要修改的主机所在堡垒机的区域ID。
     * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的主机ID。
     * > 您可以调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `1`
     */
    "HostId": string;
    /**
     * 指定修改后主机的私网地址，可使用域名或IP地址。
     * @example `193.168.XX.XX`
     */
    "HostPrivateAddress"?: string;
    /**
     * 指定修改后主机的公网地址，可使用域名或IP地址。
     * @example `200.1.XX.XX`
     */
    "HostPublicAddress"?: string;
    /**
     * 指定修改后主机的操作系统类型。取值：
     * - **Linux**
     * - **Windows**
     * @example `Linux`
     */
    "OSType"?: string;
    /**
     * 指定修改后主机的名称，最多支持128字符。
     * @example `TestHost`
     */
    "HostName"?: string;
    /**
     * 指定修改后主机的备注信息，最多支持500字符。
     * @example `Host for test.`
     */
    "Comment"?: string;
    /**
     * 指定修改后主机所属的网络域ID。
     * > 您可以调用[ListNetworkDomains ](~~2758827~~)接口获取该参数。
     * @example `1`
     */
    "NetworkDomainId"?: string;
}
