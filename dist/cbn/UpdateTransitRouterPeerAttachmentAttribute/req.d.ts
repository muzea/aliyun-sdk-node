export interface UpdateTransitRouterPeerAttachmentAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 跨地域连接ID。
     * @example `tr-attach-ft94dcrbc3e5taun3x`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 跨地域连接的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * 跨地域连接新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 是否允许企业版转发路由器自动发布跨地域连接的路由到对端地域。
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接修改跨地域连接的配置。
     * - **true**：发送检查请求，只进行校验，不会修改跨地域连接的配置。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 跨地域连接的带宽值。单位：Mbps。
     * - 当**BandwidthType**取值为**BandwidthPackage**时，该参数表示跨地域连接可使用的带宽值。
     * - 当**BandwidthType**取值为**DataTransfer**时，该参数表示跨地域连接的限速带宽值。
     * @example `2`
     */
    "Bandwidth"?: number;
    /**
     * 跨地域连接要绑定的带宽包ID。
     * <props="china">如果不输入带宽包ID，则表示您要使用测试带宽。系统默认测试带宽为1 Kbps，仅供您测试（IPv4）网络连通性。</props>
     * >当**BandwidthType**取值为**DataTransfer**时，无需配置该项。
     * @example `cenbwp-3xrxupouolw5ou****`
     */
    "CenBandwidthPackageId"?: string;
    /**
     * 带宽的分配方式。取值：
     * - **BandwidthPackage**：从带宽包中分配带宽。
     * - **DataTransfer**：不为跨地域连接分配带宽，按使用流量计费。
     * @example `BandwidthPackage`
     */
    "BandwidthType"?: string;
    /**
     * 默认链路类型。
     * 可选值为Platinum（铂金），Gold（金），默认为Gold（金）。
     * 且仅在带宽分配方式是按流量计费时，才可以配置为Platinum（铂金）。
     * @example `Gold`
     */
    "DefaultLinkType"?: string;
}
