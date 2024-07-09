export interface ListLoadBalancersRequest {
    /**
     * 负载均衡类型。仅取值：**network**，表示网络型负载均衡。
     * @example `network`
     */
    "LoadBalancerType"?: string;
    /**
     * 可用区名称。您可以通过调用[DescribeZones](~~443890~~)接口获取。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 网络型负载均衡实例的专有网络ID。一次最多支持查询10个VPC ID。
     */
    "VpcIds"?: string[];
    /**
     * 网络型负载均衡的IPv4地址类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Internet`
     */
    "AddressType"?: string;
    /**
     * 协议版本。取值：
     * - **ipv4**：IPv4类型。
     * - **DualStack**：双栈类型。
     * @example `ipv4`
     */
    "AddressIpVersion"?: string;
    /**
     * 网络型负载均衡的IPv6地址类型。取值：
     * - **Internet**：公网类型。网络型负载均衡实例具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：私网类型。网络型负载均衡实例只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Internet`
     */
    "Ipv6AddressType"?: string;
    /**
     * DNS域名。
     * @example `nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com`
     */
    "DNSName"?: string;
    /**
     * 网络型负载均衡实例状态。取值：
     * - **Inactive**：已停止，表示实例监听不会再转发流量。
     * - **Active**：运行中。
     * - **Provisioning**：创建中。
     * - **Configuring**：变配中。
     * - **Deleting**：删除中。
     * - **Deleted**：已删除。
     * @example `Active`
     */
    "LoadBalancerStatus"?: string;
    /**
     * 网络型负载均衡的业务状态。取值：
     * - **Abnormal**：异常状态。
     * - **Normal**：正常状态。
     * @example `Normal`
     */
    "LoadBalancerBusinessStatus"?: string;
    /**
     * 网络型负载均衡实例名称。一次最多支持查询20个实例名称。
     */
    "LoadBalancerNames"?: string[];
    /**
     * 资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 网络型负载均衡实例的ID。一次最多支持查询20个实例。
     */
    "LoadBalancerIds"?: string[];
    /**
     * 网络型负载均衡实例标签。
     */
    "Tag"?: {
        /**
         * 实例的标签键。最多支持输入20个标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 实例的标签值。最多支持输入20个标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ValueTest`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
