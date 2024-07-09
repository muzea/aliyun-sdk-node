export interface TagResourcesRequest {
    /**
     * 资源类型，取值：
     * - **VPC**：表示资源类型为专有网络实例。
     * - **VSWITCH**：表示资源类型为交换机实例。
     * - **ROUTETABLE**：表示资源类型为路由表实例。
     * - **EIP**：表示资源类型为弹性公网IP实例。
     * - **VPNGATEWAY**：表示资源类型为VPN网关实例。
     * - **NATGATEWAY**：表示资源类型为NAT网关实例。
     * - **COMMONBANDWIDTHPACKAGE**：表示资源类型为共享带宽实例。
     * - **PREFIXLIST**：表示资源类型为前缀列表实例。
     * - **PUBLICIPADDRESSPOOL**：表示资源类型为IP地址池实例。
     * - **IPV4GATEWAY**：表示资源类型为IPv4网关实例。
     * - **IPV6GATEWAY**：表示资源类型为IPv6网关实例。
     * - **NETWORKACL**：表示资源类型为网络ACL实例。
     * - **TRAFFICMIRRORFILTER**：表示资源类型为流量镜像筛选条件实例。
     * - **TRAFFICMIRRORSESSION**：表示资源类型为流量镜像会话实例。
     * - **FLOWLOG**：表示资源类型为流日志实例。
     * - **HAVIP**：表示资源类型为高可用虚拟IP实例。
     * - **DHCPOPTIONSSET**：表示资源类型为DHCP选项集实例。
     * - **GATEWAYENDPOINT**：表示资源类型为网关终端节点实例。
     * - **IPV6ADDRESS**：表示资源类型为IPv6地址实例。
     * > 输入的资源类型取值不区分大小写。
     * @example `VPC`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多支持输入50个资源ID。
     * @example `vpc-bp16qjewdsunr41m1****`
     */
    "ResourceId": string[];
    /**
     * 要创建并绑定标签的资源所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签信息。
     * @example `TagResources`
     */
    "Tag": {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 调用该API时，必须输入**Tag.N.Key**参数，且不能是空字符串。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。至少输入1个标签值，最多支持输入20个标签值。
         * 一个标签值最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 调用该API时，必须输入**Tag.N.Value**参数，且可以是空字符串。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
