export interface AttachClusterToHubRequest {
    /**
     * 主控集群ID。
     * @example `cd08d62e6506a4fa5a8c44c19d0fc****`
     */
    "ClusterId": string;
    /**
     * json格式的字符串，可以被解析为一个字符串数组。要添加到主控集群中的子集群数组。
     * @example `["cdea10134be464ba4acb36cc831a6****"]`
     */
    "ClusterIds": string;
    /**
     * 是否同时添加子集群到服务网格(ASM)中
     * - true 添加到服务网格
     * - false 不添加到服务网格
     * @example `true`
     */
    "AttachToMesh"?: boolean;
}
