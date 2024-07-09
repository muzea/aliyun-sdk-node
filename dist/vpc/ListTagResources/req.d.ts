export interface ListTagResourcesRequest {
    /**
     * 资源类型。取值：
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
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：**1**~**50**，默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 资源ID。最多支持50个资源ID。
     * @example `vpc-bp16qjewdsunr41m1****`
     */
    "ResourceId"?: string[];
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签信息。
     * @example `ListTagResources`
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持20个标签键。
         * 一个标签键最多支持128个字符，不能是空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**ResourceId.N**或**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持20个标签值。
         * 最多支持128个字符，可以是空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**ResourceId.N**或**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
