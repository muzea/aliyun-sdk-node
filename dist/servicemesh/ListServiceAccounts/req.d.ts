export interface ListServiceAccountsRequest {
    /**
     * 服务网格ID。
     * @example `ce134b0727aa2492db69f6c3880e1****`
     */
    "ServiceMeshId": string;
    /**
     * 数据面集群ID。
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    "ClusterId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
}
