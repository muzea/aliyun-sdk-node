export interface PullServicesRequest {
    /**
     * 服务来源类型。
     * @example `K8S`
     */
    "SourceType"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-eccf313e2224438ba53d95d039e5****`
     */
    "GatewayUniqueId": string;
    /**
     * 命名空间。
     * @example `public`
     */
    "Namespace"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
