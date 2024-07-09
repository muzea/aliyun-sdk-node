export interface CreateLoadBalancerRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~2401682~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例的网络类型。取值：
     * - **internet**：创建公网负载均衡实例后，系统会分配一个公网IP地址，可以转发公网请求。
     * - **intranet**：创建专有网络类型的负载均衡实例后，系统会分配一个内网IP地址，仅可转发内网请求。
     * @example `internet`
     */
    "AddressType"?: string;
    /**
     * 公网类型实例的付费方式。取值：
     * - **paybytraffic**（默认值）：按使用流量计费。
     *     > 如果选择了**paybytraffic**，无需设置**Bandwidth**的值；如您设置了**Bandwidth**值，该值也不会生效。
     * - **paybybandwidth**：按固定带宽计费。
     * >当**PayType**取值**PayOnDemand**且**InstanceChargeType**取值**PayByCLCU**时，该参数仅支持取值**paybytraffic**。
     * @example `paybytraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 监听的带宽峰值，单位：Mbps。
     *
     * 取值范围：**1**～**5120**。对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。
     * @example `10`
     */
    "Bandwidth"?: number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    "ClientToken"?: string;
    /**
     * 传统型负载均衡实例的名称。
     * 长度为1～80个英文或中文字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * 不指定该参数时，默认由系统分配一个实例名称。
     * @example `lb-bp1o94dp5i6ea****`
     */
    "LoadBalancerName"?: string;
    /**
     * 传统型负载均衡实例的所属的VPC ID。
     * @example `vpc-bp1aevy8sofi8mh1****`
     */
    "VpcId"?: string;
    /**
     * 专有网络实例的所属的交换机ID。
     * 创建专有网络类型的负载均衡实例，必须指定该参数。如果指定了该参数，**AddessType**参数的值会默认被设置为**intranet**。
     * @example `vsw-bp12mw1f8k3jgy****`
     */
    "VSwitchId"?: string;
    /**
     * 传统型负载均衡实例的主可用区ID。
     * 您可以通过调用[DescribeZone](~~27585~~)接口可查到相应地域下的主备可用区信息。
     * @example `cn-hangzhou-b`
     */
    "MasterZoneId"?: string;
    /**
     * 传统型负载均衡实例的备可用区ID。
     * 您可以通过调用[DescribeZone](~~27585~~)接口查询相应地域下的主备可用区信息。
     * @example `cn-hangzhou-d`
     */
    "SlaveZoneId"?: string;
    /**
     * 传统型负载均衡实例的规格。取值：
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * >若不指定规格，则创建性能共享型实例。目前，共享型实例已停止售卖，请指定实例规格。
     * 当**InstanceChargeType**取值为**PayByCLCU**，该参数不生效，您无需配置该参数。
     * @example `slb.s1.small`
     */
    "LoadBalancerSpec"?: string;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3rtopt****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例的计费类型，取值：
     * <props="china">
     * - **PayOnDemand**：按量付费。
     * - **PrePay**：包年包月。</props>
     * > 如果该参数设置为**PrePay**，即表示创建包年包月实例，则**Duration**参数必选。
     * </props>
     * <props="intl">**PayOnDemand**：按量付费。</props>
     * @example `PayOnDemand`
     */
    "PayType"?: string;
    /**
     * 预付费公网实例的计费周期，取值：
     * - **month**：月。
     * - **year**：年。
     * >该参数仅适用于中国站且仅对包年包月实例有效。
     * @example `month`
     */
    "PricingCycle"?: string;
    /**
     * 预付费公网实例的购买时长，取值：
     *
     * * 如果**PricingCycle**为**month**，取值为**1～9**。
     * * 如果**PricingCycle**为**year**，取值为**1～5**。
     * > 该参数仅适用于中国站且仅对包年包月实例有效。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 是否是自动支付预付费公网实例的账单。取值：
     * - **true**：自动支付。调用API后，立即生成SLB实例。
     * - **false**（默认值）：调用API后SLB的订单创建成功，但是未支付。您可以在控制台看到未支付订单。由于订单未支付，SLB实例不会被创建出来。
     * > 该参数仅适用于中国站且仅对包年包月实例有效。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 传统型负载均衡实例的IP版本，取值：**ipv4**或**ipv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
    /**
     * 指定实例的私网IP地址，该地址必须包含在交换机的目标网段下。
     * @example `192.168.XX.XX`
     */
    "Address"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `value`
         */
        Value: string;
    }[];
    /**
     * 是否开启实例删除保护。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "DeleteProtection"?: string;
    /**
     * 传统型负载均衡修改保护状态：
     * - **NonProtection**：不限制修改保护，设置后会清空之前设置的**ModificationProtectionReason**。
     * - **ConsoleProtection**：实例控制台修改保护状态。
     * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
     * @example `ConsoleProtection`
     */
    "ModificationProtectionStatus"?: string;
    /**
     * 设置修改保护状态的原因，长度为1～80个字符，必须以字母或中文开头，支持数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 仅在**ModificationProtectionStatus**为**ConsoleProtection**时有效。
     * @example `Managed instance`
     */
    "ModificationProtectionReason"?: string;
    /**
     * 实例计费方式。取值：
     * - **PayBySpec**（默认值）：按规格计费。
     * - **PayByCLCU**：按使用量计费。
     * >该参数仅适用于中国站且仅当**PayType**（实例付费模式）取值为**PayOnDemand**（按量付费）时，该参数生效。
     * @example `PayBySpec`
     */
    "InstanceChargeType"?: string;
}
