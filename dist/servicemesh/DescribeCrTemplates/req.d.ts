export interface DescribeCrTemplatesRequest {
    /**
     * 服务网格使用的Istio版本。
     * @example `v1.18.0.160-gcc1f41cd-aliyun
    `
     */
    "IstioVersion": string;
    /**
     * 需要获取常见模板的istio资源类型，可用取值包括：
     * - AuthorizationPolicy
     * - RequestAuthentication
     * - PeerAuthentication
     * - WorkloadGroup
     * - WorkloadEntry
     * - Sidecar
     * - EnvoyFilter
     * - ServiceEntry
     * - Gateway
     * - DestinationRule
     * - VirtualService
     * @example `VirtualService`
     */
    "Kind": string;
}
