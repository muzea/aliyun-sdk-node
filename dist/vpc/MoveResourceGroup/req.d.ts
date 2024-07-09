export interface MoveResourceGroupRequest {
    /**
     * 需要修改资源组的云资源的实例ID。
     * @example `vpc-hp31psbg8ec3023s6****`
     */
    "ResourceId": string;
    /**
     * 需要修改资源组的云资源类型，取值：
     * - **Vpc**：专有网络
     * - **Eip**：弹性公网IP
     * - **BandwidthPackage**：共享带宽
     * - **PrefixList**：前缀列表
     * - **PublicIpAddressPool**：地址池
     * - **FlowLog**：流日志
     * - **HaVip**：高可用虚拟IP
     * - **TrafficMirrorFilter**：流量镜像筛选条件
     * - **TrafficMirrorSession**：流量镜像会话
     * - **IPv4Gateway**：IPv4网关
     * - **IPv6Gateway**：IPv6网关
     * - **DhcpOptionsSet**：DHCP选项集
     * - **GatewayEndpoint**：网关终端节点
     * @example `vpc`
     */
    "ResourceType": string;
    /**
     * 需要移入云资源实例的资源组ID。
     * > 资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。更多信息，请参见[什么是资源管理](~~94475~~)。
     * @example `rg-acfm3peow3k****`
     */
    "NewResourceGroupId": string;
    /**
     * 云资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
