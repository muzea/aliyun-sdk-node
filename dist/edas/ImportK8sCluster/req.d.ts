export interface ImportK8sClusterRequest {
    /**
     * 集群ID，可通过调用GetK8sCluster接口获取，请参见[GetK8sCluster](~~181437~~)。
     * @example `9c28bbb9-****-44b3-b953-54ef8a2d0be2`
     */
    "ClusterId": string;
    /**
     * 命名空间ID。格式为“`地域ID:微服务空间标识符`”，例如：`cn-hangzhou:doc`。
     * @example `cn-beijing:doc`
     */
    "NamespaceId"?: string;
    /**
     * 此参数无需关注。
     * @example `1`
     */
    "Mode"?: number;
    /**
     * 是否开启ASM：
     * - true：开启
     * - false：不开启
     * @example `true`
     */
    "EnableAsm"?: boolean;
}
