export interface CreateRouterInterfaceRequest {
    /**
     * 路由器接口所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由器接口的角色，取值：
     *
     * - **InitiatingSide**：连接发起端。
     * - **AcceptingSide**：连接接收端。
     * @example `InitiatingSide`
     */
    "Role": string;
    /**
     * 连接接收端所在的地域ID。
     * @example `cn-shanghai`
     */
    "OppositeRegionId": string;
    /**
     * 路由器接口的规格。可用的规格和对应的带宽取值如下：
     *
     * - **Mini.2**：2 Mbps
     * - **Mini.5**：5 Mbps
     * - **Small.1**：10 Mbps
     * - **Small.2**：20 Mbps
     *
     * - **Small.5**：50 Mbps
     * - **Middle.1**：100 Mbps
     * - **Middle.2**：200 Mbps
     * - **Middle.5**：500 Mbps
     * - **Large.1**：1000 Mbps
     * - **Large.2**：2000 Mbps
     * - **Large.5**：5000 Mbps
     * - **Xlarge.1**：10000 Mbps
     * > 当**Role**为**AcceptingSide**（连接接收端）时，**Spec**取值为**Negative**即创建接收端路由器接口时不涉及规格。
     * @example `Mini.2`
     */
    "Spec": string;
    /**
     * 路由器接口关联的路由器类型，取值：
     * - **VRouter**：VPC路由器。
     * - **VBR**：边界路由器。
     *
     * @example `VRouter`
     */
    "RouterType": string;
    /**
     *  路由器接口关联的路由器ID。
     * @example `vbr-m5ebm6g9ptc9mly1c****`
     */
    "RouterId": string;
    /**
     *  对端路由器接口ID。
     * @example `ri-2zeo3xzyf38r4urzd****`
     */
    "OppositeInterfaceId"?: string;
    /**
     *  对端路由器的ID。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    "OppositeRouterId"?: string;
    /**
     * 对端路由器接口关联的路由器类型，取值：
     * - **VRouter**：VPC路由器。
     * - **VBR**：边界路由器。
     * @example `VRouter`
     */
    "OppositeRouterType"?: string;
    /**
     * 对端路由器接口的所有者的阿里云账号ID。
     * @example `253460731706911258`
     */
    "OppositeInterfaceOwnerId"?: string;
    /**
     * 健康检查源IP地址，必须是本端VPC内的一个未被使用的IP。
     * > 物理专线接入场景下可指定该参数。
     *
     * @example `192.168.0.6`
     */
    "HealthCheckSourceIp"?: string;
    /**
     * 健康检查目的IP地址。
     * > 当指定了**HealthCheckSourceIp**后，该参数必填。
     * @example `192.168.0.8`
     */
    "HealthCheckTargetIp"?: string;
    /**
     * VBR所属的接入点ID。
     * 您可以通过调用[DescribeAccessPoints](~~36062~~)接口获取物理专线接入点ID。
     *
     * > 物理专线接入场景下需指定该参数。
     * @example `ap-cn-hangzhou-yh-ts-A`
     */
    "AccessPointId"?: string;
    /**
     * 对端所属的接入点ID。
     * > 对端路由器接口位于VBR上时需指定该参数，创建路由器接口后无法修改。
     * @example `ap-cn-shanghai-nt-aligroup-C`
     */
    "OppositeAccessPointId"?: string;
    /**
     * 路由器接口的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `abcabc`
     */
    "Description"?: string;
    /**
     * 路由器接口的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `abc`
     */
    "Name"?: string;
    /**
     * 购买时长，取值：
     * - 当选择按月付费时，取值范围为**1~9**。
     * - 当选择按年付费时，取值范围为**1~3**。
     * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必填。
     * @example `3`
     */
    "Period"?: number;
    /**
     * 路由器接口的付费方式，取值：
     * - **PrePaid**：预付费。
     * - **PostPaid**：后付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 是否自动付费，取值：
     *
     * - **false**（默认值）：不开启自动付费，生成订单后需要到订单中心完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必填。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 预付费的计费周期，取值：
     *
     * - **Month**（默认值）：按月付费。
     * - **Year**：按年付费。
     *
     * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必填。
     *
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否为使用快速连接模式创建的VBR上联路由器接口，快速连接模式可实现VBR和VPC两端路由器接口创建完毕后自动完成连接。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > -  该参数只在**RouterType**取值为**VBR**，**OppositeRouterType**参数取值为**VRouter**时生效。
     * - 当**FastLinkMode**参数取值为**true**时，**Role**参数必须取值为**InitiatingSide**，**AccessPointId**、**OppositeRouterType**、**OppsiteRouterId**和**OppositeInterfaceOwnerId**参数为必选。
     * @example `false`
     */
    "FastLinkMode"?: boolean;
    /**
     * 是否开通自动续费。取值：
     * - **false**（默认值）：不开通。
     * - **true**：开通。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tags"?: {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如果传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
