export interface DescribeLoadBalancersRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 添加的后端服务器ID。
     * @example `i-2zebcbq******`
     */
    "ServerId"?: string;
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
    /**
     * 实例状态。取值：
     * - **inactive**: 实例已停止，此状态的实例监听不会再转发流量。
     * - **active**: 实例运行中，实例创建后，默认状态为**active**。
     * - **locked**: 实例已锁定。当负载均衡实例到期后，但到期时间未超过7天时，负载均衡实例进入锁定状态。此种状态下，您不能对负载均衡实例进行任何操作，并且实例不再会进行流量转发，但会保留实例的IP和其它配置。
     * @example `active`
     */
    "LoadBalancerStatus"?: string;
    /**
     * 传统型负载均衡实例ID。
     * 支持多值查询，最多可输入10个ID，以半角逗号（,）分隔。
     * @example `lb-bp1b6c719dfa****`
     */
    "LoadBalancerId"?: string;
    /**
     * 传统型负载均衡实例名称。
     * 长度为1~80个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * 支持多值查询，最多可输入10个名称，以半角逗号（,）分隔。
     * @example `test`
     */
    "LoadBalancerName"?: string;
    /**
     * 添加的后端服务器的内网地址。
     * 支持多值查询，以半角逗号（,）分隔。
     * @example `10.XX.XX.102`
     */
    "ServerIntranetAddress"?: string;
    /**
     * 传统型负载均衡实例的网络类型。取值：
     * * **internet**：创建公网负载均衡实例后，系统会分配一个公网IP地址，可以转发公网请求。
     * * **intranet**：创建内网负载均衡实例后，系统会分配一个内网IP地址，仅可转发内网请求。
     * @example `intranet`
     */
    "AddressType"?: string;
    /**
     * 公网计费方式。取值：
     * - **paybybandwidth**：按带宽计费。
     * - **paybytraffic**：按流量计费。
     * <props="china">当**PayType**参数的值为**PrePay**时，只支持按带宽计费。当**InstanceChargeType**参数的值为**PayByCLCU**时，只支持按流量计费。</props>
     * @example `paybytraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 传统型负载均衡实例所属的VPC ID。
     * @example `vpc-bp1aevy8sof****`
     */
    "VpcId"?: string;
    /**
     * 传统型负载均衡实例所属的交换机ID。
     * @example `vsw-bp12mw1f8k3****`
     */
    "VSwitchId"?: string;
    /**
     * 私网实例的网络类型。取值：
     * - **vpc**：专有网络实例。
     * - **classic**：经典网络实例。
     * @example `vpc`
     */
    "NetworkType"?: string;
    /**
     * 传统型负载均衡实例的服务地址。
     * @example `192.168.XX.XX`
     */
    "Address"?: string;
    /**
     * 负载均衡实例的主可用区ID。
     * @example `cn-hangzhou-b`
     */
    "MasterZoneId"?: string;
    /**
     * 传统型负载均衡实例的备可用区ID。
     * 目前对金融云用户暂时不支持多可用区功能。
     * @example `cn-hangzhou-d`
     */
    "SlaveZoneId"?: string;
    /**
     * 传统型负载均衡实例绑定的标签列表，其结构是一个JSON dictionary，包含标签键和标签值。
     * 一次请求中，绑定的标签列表中最多支持10个标签。
     * @example `[{"tagKey":"Key1","tagValue":"Value1"}]`
     */
    "Tags"?: string;
    /**
     * 传统型负载均衡实例付费模式。取值：
     * * **PayOnDemand**：按量付费。
     * <props="china">- **PrePay**：包年包月。</props>
     * @example `PayOnDemand`
     */
    "PayType"?: string;
    /**
     * 企业资源组ID。
     * @example `rg-acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围：**1**~**100**。
     * > 如果设置了**PageSize**，则需要同时设置**PageNumber**。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
