export interface CreateNatGatewayRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要创建NAT网关的VPC的ID。
     * @example `vpc-bp1di7uewzmtvfuq8****`
     */
    "VpcId": string;
    /**
     * NAT网关的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * 如果没有指定该参数，系统会为NAT网关创建默认的名称。
     * @example `fortest`
     */
    "Name"?: string;
    /**
     * NAT网关的描述。
     * 描述可以为空；或填写2~256个字符，不能以`http://`或`https://`开头。
     * @example `testnat`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 包年包月公网NAT网关已停止新购，该参数不再使用。
     * @example `无效参数`
     */
    "Spec"?: string;
    /**
     * NAT网关的付费模式，取值：
     * **PostPaid**（默认值）：按量付费。
     *
     * 更多信息，请参见[公网NAT网关计费](~~48126~~)和[VPC NAT网关计费](~~270913~~)。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 包年包月公网NAT网关已停止新购，该参数不再使用。
     * @example `无效参数`
     */
    "PricingCycle"?: string;
    /**
     * 包年包月公网NAT网关已停止新购，该参数不再使用。
     * @example `无效参数`
     */
    "Duration"?: string;
    /**
     * 包年包月公网NAT网关已停止新购，该参数不再使用。
     * @example `无效参数`
     */
    "AutoPay"?: boolean;
    /**
     * NAT网关所属的交换机的ID。
     * 创建NAT网关时，您必须指定NAT网关所属的交换机，系统会为NAT网关分配一个交换机内的空闲私网IP地址。
     * - 如果您要在存量交换机中创建NAT网关，请确保交换机所属的可用区支持创建NAT网关，且交换机有可用的IP。
     * - 如果您还未创建交换机，请先在支持创建NAT网关的可用区创建交换机，然后再指定NAT网关所属的交换机。
     * > 您可以通过[ListEnhanhcedNatGatewayAvailableZones](~~182292~~)接口查询NAT网关的资源可用区，通过[DescribeVSwitches](~~35748~~)接口查询交换机中的可用IP数。
     * @example `vsw-bp1e3se98n9fq8hle****`
     */
    "VSwitchId"?: string;
    /**
     * NAT网关的类型，取值：**Enhanced**，增强型NAT网关。
     * @example `Enhanced`
     */
    "NatType"?: string;
    /**
     * NAT网关的计费类型，取值：**PayByLcu**，表示按使用量计费。
     * @example `PayByLcu`
     */
    "InternetChargeType"?: string;
    /**
     * 创建的NAT网关类型，取值：
     * - **internet**：公网NAT网关。
     * - **intranet**：VPC NAT网关。
     * @example `internet`
     */
    "NetworkType"?: string;
    /**
     * 是否开启防火墙功能，取值：
     * - **false**（默认值）：不开启。
     * ><notice> 该参数已弃用。></notice>
     * @example `false`
     */
    "SecurityProtectionEnabled"?: boolean;
    /**
     * 是否开启ICMP代回。取值：
     * - **true**（默认值）：开启。
     * - **false**：不开启。
     * @example `true`
     */
    "IcmpReplyEnabled"?: boolean;
    /**
     * NAT网关的EIP绑定模式，取值：
     * - **MULTI_BINDED**（默认值）：多EIP网卡可见模式。
     * - **NAT**：EIP普通模式，兼容IPv4网关。
     *   > NAT网关的EIP绑定模式为EIP普通模式时，EIP将占用NAT网关所在交换机的一个私网IP，请确保NAT网关所在交换机内私网IP地址充足，如果NAT网关所在的交换机没有可用的空闲私网地址时，将无法绑定新的EIP。NAT网关的EIP绑定模式为EIP普通模式时，NAT网关支持绑定的EIP数量上限为50个。
     * @example `MULTI_BINDED`
     */
    "EipBindMode"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。API调用时使用Tag.N.Key的形式，N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。API调用时使用Tag.N.Value的形式，N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
