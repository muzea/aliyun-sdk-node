export interface UpdateServiceSourceRequest {
    /**
     * 网关ID。
     * @example `429`
     */
    "GatewayId"?: number;
    /**
     * 类型。
     * - 容器服务为K8s。
     * - NACOS为NACOS。
     * @example `K8s`
     */
    "Type"?: string;
    /**
     * 来源。
     * - 容器服务为K8s。
     * - NACOS为MSE。
     * @example `K8s`
     */
    "Source"?: string;
    /**
     * 地址。
     * @example `c9ad2a0717032427e920754e25b49e3b5`
     */
    "Address"?: string;
    /**
     * 服务来源ID。
     * @example `63`
     */
    "Id"?: number;
    /**
     * 名称。
     * @example `istio`
     */
    "Name"?: string;
    /**
     * 网关唯一ID。
     * @example `gw-cdd1bb9bfb8341e9805f931a3ba1f4c6`
     */
    "GatewayUniqueId"?: string;
    /**
     * Ingress配置。
     * @example `zh`
     */
    "IngressOptionsRequest"?: {
        /**
         * 是否开启Ingress。
         * @example `true`
         */
        EnableIngress: boolean;
        /**
         * 监听Ingress Class。
         * @example `com.test.xxx`
         */
        IngressClass: string;
        /**
         * 监听目标命名空间。
         * @example `default`
         */
        WatchNamespace: string;
        /**
         * 是否更新Ingress Status。
         * @example `true`
         */
        EnableStatus: boolean;
    };
    /**
     * 服务根路径数组。
     */
    "PathList"?: string[];
    /**
     * 返回信息的语言类型。
     * - zh：中文。
     * - en：英文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
