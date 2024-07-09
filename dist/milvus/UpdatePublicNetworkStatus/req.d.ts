export interface UpdatePublicNetworkStatusRequest {
    /**
     * 实例ID。
     * @example `c-123xxx`
     */
    "InstanceId": string;
    /**
     * 组件类型。取值范围：
     * - Proxy
     * @example `Proxy`
     */
    "ComponentType": string;
    /**
     * 开启/关闭公网。
     * @example `true`
     */
    "PublicNetworkEnabled"?: boolean;
}
