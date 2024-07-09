export interface RemoveClusterFromServiceMeshRequest {
    /**
     * 服务网格ID。
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    "ServiceMeshId": string;
    /**
     * 要删除的集群ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ClusterId": string;
    /**
     * 移除集群时，保留istio-system命名空间。
     * @example `false`
     */
    "ReserveNamespace"?: boolean;
}
