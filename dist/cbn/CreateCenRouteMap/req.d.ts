export interface CreateCenRouteMapRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 路由策略应用的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "CenRegionId": string;
    /**
     * 路由策略的应用方向。取值：
     * - **RegionIn**：入地域网关方向，表示路由传入云企业网地域网关的方向。
     *  例如：路由从本地域的网络实例发布到本地域网关，或其他地域的路由发布到本地域网关。
     * - **RegionOut**：出地域网关方向，表示路由传出云企业网地域网关的方向。
     *  例如：路由从本地域网关发布到本地域下的网络实例，或发布到其他地域的地域网关。
     * @example `RegionIn`
     */
    "TransmitDirection": string;
    /**
     * 路由策略的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 路由策略的优先级。取值范围：**1**~**100**。优先级数字越小，表示优先级越高。
     * > 同地域、同应用方向的路由策略优先级唯一。执行路由策略时，系统从优先级数字最小的路由策略开始匹配条件语句，因此在指定路由策略优先级时，要注意符合期望的匹配顺序。
     * @example `3`
     */
    "Priority": number;
    /**
     * 所有条件都匹配后的策略行为。取值：
     * - **Permit**：允许匹配的路由通过。
     * - **Deny**：拒绝匹配的路由通过。
     * @example `Permit`
     */
    "MapResult": string;
    /**
     * 关联的下一条路由策略的优先级。
     * - 仅**MapResult**取值为**Permit**时，才支持设置关联策略优先级，且被允许通过的路由才会继续匹配关联的下一条路由策略。
     * - 要关联的下一条路由策略必须和当前路由策略拥有相同的地域和应用方向。
     * - 关联的下一条路由策略的优先级必须低于当前路由策略的优先级。
     * @example `20`
     */
    "NextPriority"?: number;
    /**
     * 前缀列表的匹配模式。取值：
     * - **Include**：模糊匹配。匹配条件中的路由前缀包含被匹配路由的路由前缀即判定为匹配成功。
     *  例如：定义10.10.0.0/16的策略可以模糊匹配到10.10.1.0/24的路由。
     * - **Complete**：精确匹配。匹配条件中的路由前缀必须与被匹配路由的路由前缀一致，才判定为匹配成功。
     *  例如：定义10.10.0.0/16的策略仅可以精确匹配到10.10.0.0/16的路由。
     * @example `Include `
     */
    "CidrMatchMode"?: string;
    /**
     * AS Path列表的匹配模式。取值：
     * - **Include**：模糊匹配，匹配条件中的AS Path与被匹配路由的AS Path有重叠即判定为匹配成功。
     * - **Complete**：精确匹配，匹配条件中的AS Path必须与被匹配路由的AS Path一致，才判定为匹配成功。
     * @example `Include`
     */
    "AsPathMatchMode"?: string;
    /**
     * Community的匹配模式。取值：
     * - **Include**：模糊匹配，匹配条件中的Community与被匹配路由的Community有重叠即判定为匹配成功。
     * - **Complete**：精确匹配，匹配条件中的Community必须与被匹配路由的Community一致，才判定为匹配成功。
     * @example `Include`
     */
    "CommunityMatchMode"?: string;
    /**
     * Community的执行模式。取值：
     * - **Additive**：添加，表示为路由添加Community。
     * - **Replace**：替换，表示替换路由原有的Community。
     * 本参数表示路由通过匹配条件后，要执行的操作。
     * @example `Additive`
     */
    "CommunityOperateMode"?: string;
    /**
     * 修改路由的优先级。
     * 取值范围：**1**~**100**。路由的优先级默认为**50**，取值越小优先级越高。
     * 本参数表示路由通过匹配条件后，要执行的操作。
     * @example `50`
     */
    "Preference"?: number;
    /**
     * 是否使用源实例ID列表的排除匹配模式。取值：
     * - **false**（默认值）：否，即路由传递的源实例ID在**SourceInstanceIds.N**中时，匹配通过。
     * - **true**：是，即路由传递的源实例ID不在**SourceInstanceIds.N**中时，匹配通过。
     * @example `false`
     */
    "SourceInstanceIdsReverseMatch"?: boolean;
    /**
     * 是否使用目的实例ID列表的排除匹配模式。取值：
     * - **false**（默认值）：否，即路由传递的目的实例ID在**DestinationInstanceIds.N**中时，匹配通过。
     * - **true**：是，即路由传递的目的实例ID不在**DestinationInstanceIds.N**中时，匹配通过。
     * @example `false`
     */
    "DestinationInstanceIdsReverseMatch"?: boolean;
    /**
     * 路由需匹配的IP地址类型。取值：
     * - **IPv4**：表示只匹配IPv4路由。
     * - **IPv6**：表示只匹配IPv6路由。
     * 本参数可以为空，表示匹配所有类型的路由。
     * @example `IPv4`
     */
    "MatchAddressType"?: string;
    /**
     * 转发路由器的路由表ID。
     * 如果您不输入路由表ID，则路由策略自动关联至转发路由器的默认路由表。
     * @example `vtb-gw8nx3515m1mbd1z1****`
     */
    "TransitRouterRouteTableId"?: string;
    /**
     * 路由需匹配的源实例ID列表。支持输入以下类型的实例ID：
     * - 专有网络VPC（Virtual Private Cloud）实例ID
     * - 边界路由器VBR（Virtual Border Router）实例ID
     * - 云连接网CCN（Cloud Connect Network）实例ID
     * - 智能接入网关（Smart Access Gateway）实例ID
     * - IPsec连接ID
     * 最多支持输入32个实例ID。
     * @example `vpc-adeg3544fdf34vf****`
     */
    "SourceInstanceIds"?: string[];
    /**
     * 路由需匹配的目的实例ID列表。支持输入以下类型的实例ID：
     * - 专有网络VPC（Virtual Private Cloud）实例ID
     * - 边界路由器VBR（Virtual Border Router）实例ID
     * - 云连接网CCN（Cloud Connect Network）实例ID
     * - 智能接入网关（Smart Access Gateway）实例ID
     * - IPsec连接ID
     * 最多支持输入32个实例ID。
     * >仅路由策略的应用方向为出地域网关方向，且目的实例ID为本地域下的实例ID时，目的实例ID列表才会生效。
     * @example `vpc-afrfs434465fdf****`
     */
    "DestinationInstanceIds"?: string[];
    /**
     * 路由需匹配的源路由表ID列表。最多支持输入32个路由表ID。
     * @example `vtb-adfr233vf34rvd4****`
     */
    "SourceRouteTableIds"?: string[];
    /**
     * 路由需匹配的目的路由表ID列表。最多支持输入32个路由表ID。
     * >仅路由策略的应用方向为出地域网关方向，且目的路由表ID为本地域下网络实例的路由表ID时，目的路由表ID列表才会生效。
     * @example `vtb-adefrgtr144vf****`
     */
    "DestinationRouteTableIds"?: string[];
    /**
     * 路由需匹配的源地域ID列表。最多支持输入32个地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-beijing`
     */
    "SourceRegionIds"?: string[];
    /**
     * 路由需匹配的源实例类型列表。支持以下实例类型：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * - **VPN**：VPN网关实例或者IPsec连接。
     *     - 如果IPsec连接或SSL服务端绑定了VPN网关实例，则VPN网关实例关联的VPC必须连接至转发路由器实例，且VPN网关实例必须运行BGP动态路由协议，本参数才能生效。
     *     - 如果IPsec连接直接绑定了转发路由器实例，则本参数生效。
     * 支持输入多种实例类型。
     * @example `VPC`
     */
    "SourceChildInstanceTypes"?: string[];
    /**
     * 路由需匹配的目的实例类型列表。支持以下实例类型：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * - **VPN**：IPsec连接。
     *     > 如果IPsec连接或者SSL服务端绑定了VPN网关实例，并通过VPN网关实例关联的VPC连接至了转发路由器实例，则本参数不生效。本参数仅当IPsec连接直接绑定转发路由器实例时才生效。
     * 支持输入多种实例类型。
     * >仅路由策略的应用方向为出地域网关方向，且目的实例类型为本地域下的实例类型时，目的实例类型列表才会生效。
     * @example `VPC`
     */
    "DestinationChildInstanceTypes"?: string[];
    /**
     * 路由需匹配的前缀列表。
     * 前缀列表中的IP地址段使用CIDR格式，最多支持输入32个IP地址段。
     * @example `10.10.10.0/24`
     */
    "DestinationCidrBlocks"?: string[];
    /**
     * 路由需匹配的路由类型列表。支持以下路由类型：
     * - **System**：系统路由，由系统自动生成的路由。
     * - **Custom**：自定义路由，由用户手动添加的路由。
     * - **BGP**：BGP路由，通过BGP路由协议传播的路由。
     * 支持输入多种路由类型。
     * @example `System`
     */
    "RouteTypes"?: string[];
    /**
     * 路由需匹配的AS Path列表。
     * 最多支持输入32个AS号码。
     * > 仅支持AS SEQUENCE，不支持AS SET、AS CONFED SEQUENCE和AS CONFED SET，即只能是AS号列表，不支持集合和子列表。
     * @example `65501`
     */
    "MatchAsns"?: number[];
    /**
     * 路由需匹配的Community集合。
     * 每个Community格式为n:m，n、m的取值范围为**1**~**65535**。Community需要符合RFC 1997，不支持Large Community（RFC 8092）。
     * 最多支持输入32个Community。
     * > Community配置错误可能会导致路由不能发布到本地数据中心。
     * @example `65501:1`
     */
    "MatchCommunitySet"?: string[];
    /**
     * 要执行的Community集合。
     * 每个Community格式为n:m，n、m的取值范围为**1**~**65535**。Community需要符合RFC 1997，不支持Large Communities（RFC 8092）。
     * 最多支持输入32个Community。
     * > Community配置错误可能会导致路由不能发布到本地数据中心。
     * @example `65501:1`
     */
    "OperateCommunitySet"?: string[];
    /**
     * 地域网关接收或发布路由时附加的AS Path。
     * 路由策略应用方向不同，配置附加AS Path的要求也不同，具体如下：
     * - 入地域网关方向配置附加AS Path时，匹配条件中必须配置源实例ID列表和源地域，且源地域必须与路由策略应用的地域一致。
     * - 出地域网关方向配置附加AS Path时，匹配条件中必须配置目的实例ID列表。
     * 本参数表示路由通过匹配条件后，要执行的操作。最多支持输入32个AS号码。
     * @example `65501`
     */
    "PrependAsPath"?: number[];
}
