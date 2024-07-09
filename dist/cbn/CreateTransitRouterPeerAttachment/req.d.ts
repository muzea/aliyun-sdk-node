export interface CreateTransitRouterPeerAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-j3jzhw1zpau2km****`
     */
    "CenId"?: string;
    /**
     * 本端企业版转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId"?: string;
    /**
     * 本端企业版转发路由器实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 跨地域连接的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * 跨地域连接的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 对端转发路由器实例ID。
     * @example `tr-m5eq27g6bndum7e88****`
     */
    "PeerTransitRouterId": string;
    /**
     * 对端转发路由器实例所属地域ID。
     * @example `cn-qingdao`
     */
    "PeerTransitRouterRegionId"?: string;
    /**
     * 是否使企业版转发路由器自动发布跨地域连接的路由到对端地域。
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 跨地域连接的带宽值。单位：Mbps。
     * - 当**BandwidthType**取值为**BandwidthPackage**时，该参数表示跨地域连接可使用的带宽值。
     * - 当**BandwidthType**取值为**DataTransfer**时，该参数表示跨地域连接的限速带宽值。
     * @example `2`
     */
    "Bandwidth"?: number;
    /**
     * 跨地域连接要绑定的带宽包ID。
     * > 当**BandwidthType**取值为**DataTransfer**时，无需配置该项。
     * @example `cenbwp-3xrxupouolw5ou****`
     */
    "CenBandwidthPackageId"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接创建跨地域连接。
     * - **true**：发送检查请求，只进行校验，不会创建跨地域连接。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 跨地域连接的带宽分配方式。取值：
     * - **BandwidthPackage**：从带宽包中分配带宽。
     * - **DataTransfer**：不为跨地域连接分配带宽，按使用流量计费。
     * @example `BandwidthPackage`
     */
    "BandwidthType"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `tag_A1`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `value_A1`
         */
        Value: string;
    }[];
    /**
     * 默认链路类型。
     * 可选值为Platinum（铂金），Gold（金），默认为Gold（金）。
     * 且仅在带宽分配方式是按流量计费时，才可以配置为Platinum（铂金）。
     * @example `Gold`
     */
    "DefaultLinkType"?: string;
}
