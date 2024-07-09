export interface DescribeNamespaceScopeSidecarConfigRequest {
    /**
     * ASM实例ID。
     * @example `c7120e75a202d4fd8acb028a86b6a****`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
}
