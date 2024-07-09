export interface GetK8sClusterRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionTag": string;
    /**
     * 分页查询时当前显示第几页，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时每页显示几条，默认值为1000。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * K8s集群类型：
     * - 5：容器服务K8s集群。
     * - 7：自建K8s集群。
     * @example `5`
     */
    "ClusterType"?: number;
    /**
     * 集群子类型：
     * * Ask：Serverless K8s 集群。
     * * ManagedKubernetes：容器服务 K8s 集群。
     * @example `Ask`
     */
    "SubClusterType"?: string;
}
