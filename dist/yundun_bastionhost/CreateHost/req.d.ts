export interface CreateHostRequest {
    /**
     * 指定新创建主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定新创建主机所在堡垒机的地域ID。
     * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定新创建主机的私网地址，可使用域名或IP地址。
     * > **ActiveAddressType**选择**Private**时，该参数为必填项。
     * @example `192.168.XX.XX`
     */
    "HostPrivateAddress"?: string;
    /**
     * 指定新创建主机的公网地址，可使用域名或IP地址。
     * > **ActiveAddressType**选择**Public**时，该参数为必填项。
     * @example `172.16.XX.XX`
     */
    "HostPublicAddress"?: string;
    /**
     * 指定新创建主机的地址类型。取值：
     * - **Public**：公网地址
     * - **Private**：私网地址
     * @example `Public`
     */
    "ActiveAddressType": string;
    /**
     * 指定新创建主机的名称，最多支持128字符。
     * @example `host01`
     */
    "HostName": string;
    /**
     * 指定新创建主机的来源。取值：
     * - **Local**：本地主机
     * - **Ecs**：ECS实例
     * - **Rds**：RDS专属集群主机
     * @example `Local`
     */
    "Source": string;
    /**
     * 指定新创建主机的操作系统。取值：
     * - **Linux**
     * - **Windows**
     * @example `Linux`
     */
    "OSType": string;
    /**
     * 指定主机的备注信息，最多支持500字符。
     * @example `Local Host`
     */
    "Comment"?: string;
    /**
     * 指定新创建的ECS实例ID或专属集群主机ID。
     * > **Source**选择**Ecs**或**Rds**时，该参数为必填项。
     * @example `i-dfabfda`
     */
    "SourceInstanceId"?: string;
    /**
     * 指定新创建的ECS实例或专属集群主机所属区域ID。
     * > **Source**选择**Ecs**或**Rds**时，该参数为必填项。
     * @example `cn-hangzhou`
     */
    "InstanceRegionId"?: string;
    /**
     * 指定新创建主机所属的网络域ID。
     * > 您可以调用[ListNetworkDomains ](~~2758827~~)接口获取该参数。
     * @example `1`
     */
    "NetworkDomainId"?: string;
}
