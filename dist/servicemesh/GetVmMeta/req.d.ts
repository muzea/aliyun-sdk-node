export interface GetVmMetaRequest {
    /**
     * 服务网格ID
     * @example `ce51a7de4a5144db88a864ed91****`
     */
    "ServiceMeshId": string;
    /**
     * 信任域。在同时填写命名空间和服务账号时，默认值为cluster.local；否则将被忽略。
     * @example `cluster.local`
     */
    "TrustDomain"?: string;
    /**
     * 命名空间。在同时填写命名空间和服务账号时生效，否则将被忽略。
     * @example `hello`
     */
    "Namespace"?: string;
    /**
     * 服务账号。在同时填写命名空间和服务账号时生效，否则将被忽略。
     * @example `http-sa`
     */
    "ServiceAccount"?: string;
}
