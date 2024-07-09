export interface RevokeKubeconfigRequest {
    /**
     * 被吊销Kubeconfig的服务网格ID
     * @example `cf08a11940e8c46c48bc791fcdb3****`
     */
    "ServiceMeshId": string;
    /**
     * 是否返回私网访问的Kubeconfig，取值：
     * - `true`：返回私网访问的Kubeconfig
     * - `false`：返回公网访问的Kubeconfig
     * @example `false`
     */
    "PrivateIpAddress"?: boolean;
}
