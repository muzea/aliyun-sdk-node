export interface DescribeClusterPrometheusRequest {
    /**
     * 服务网格ID
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId"?: string;
    /**
     * 数据面集群ID
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    "K8sClusterId"?: string;
    /**
     * 数据面集群所在地域ID
     * @example `cn-hangzhou`
     */
    "K8sClusterRegionId"?: string;
}
