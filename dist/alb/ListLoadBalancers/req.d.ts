export interface ListLoadBalancersRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 应用型负载均衡实例所在的可用区ID。
     * 您可以通过调用[DescribeZones](~~189196~~)接口获取可用区ID对应的可用区信息。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 应用型负载均衡实例状态。取值：
     * - **Inactive**： 已停止，监听不再转发流量。
     * - **Active**:：运行中。
     * - **Provisioning**：创建中。
     * - **Configuring**：变配中。
     * - **CreateFailed**：创建失败，此时不会产生费用，实例只能被删除。系统默认清理最近1天创建失败的实例。
     * @example `Active`
     */
    "LoadBalancerStatus"?: string;
    /**
     * 应用型负载均衡的业务状态。取值：
     * - **Abnormal**：异常。
     * - **Normal**：正常。
     * @example `Normal`
     */
    "LoadBalancerBussinessStatus"?: string;
    /**
     * 实例ID列表。最多支持20个应用型负载均衡实例ID。
     */
    "LoadBalancerIds"?: string[];
    /**
     * 实例名称列表。最多支持10个实例名称。
     */
    "LoadBalancerNames"?: string[];
    /**
     * 应用型负载均衡实例所属的VPC ID。最多支持10个VPC ID。
     */
    "VpcIds"?: string[];
    /**
     * 实例标签。
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
         * @example `alueTest`
         */
        Value: string;
    }[];
    /**
     * 实例地址类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Intranet`
     */
    "AddressType"?: string;
    /**
     * 实例的计费类型。取值：
     * **PostPay**（默认值）：表示按量计费。
     * @example `PostPay`
     */
    "PayType"?: string;
    /**
     * 企业资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 协议版本。取值：
     * - **IPv4**：IPv4类型。
     * - **DualStack**：双栈类型。
     * @example `IPv4`
     */
    "AddressIpVersion"?: string;
    /**
     * 应用型负载均衡的IPv6地址类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Intranet`
     */
    "Ipv6AddressType"?: string;
    /**
     * DNS域名。
     * @example `alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com`
     */
    "DNSName"?: string;
}
