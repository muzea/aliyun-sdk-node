export interface DescribeChildInstanceRegionsRequest {
    /**
     * 网络实例的类型，取值：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * @example `VPC`
     */
    "ProductType"?: string;
    /**
     * 支持的语言。包括以下取值：中文：zh-CN（默认值）                                 英文：en-US                                 日文：ja
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
