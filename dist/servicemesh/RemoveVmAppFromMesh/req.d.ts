export interface RemoveVmAppFromMeshRequest {
    /**
     * 服务网格ID
     * @example `ce51a7de4a5144db88a864ed9****`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间
     * @example `hello`
     */
    "Namespace": string;
    /**
     * 服务名称
     * @example `http-service`
     */
    "ServiceName": string;
}
