export interface AddClusterIntoServiceMeshRequest {
    /**
     * 服务网格ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * 待添加集群的ID。
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    "ClusterId": string;
    /**
     * 添加集群时不检查目标集群是否存在istio-system命名空间。一般用于自建Istio迁移ASM场景。
     * @example `false`
     */
    "IgnoreNamespaceCheck"?: boolean;
}
