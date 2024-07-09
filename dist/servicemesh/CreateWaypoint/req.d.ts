export interface CreateWaypointRequest {
    /**
     * 服务网格实例ID。
     * @example `ce134b0727aa2492db69f6c3880e****`
     */
    "ServiceMeshId": string;
    /**
     * 数据面集群ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ClusterId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * Waypoint生效的ServiceAccount。如果为空，表示对整个命名空间生效。
     * @example `bookinfo-productpage`
     */
    "ServiceAccount"?: string;
    /**
     * Waypoint Pod请求的CPU资源。
     * @example `100m`
     */
    "RequestCPU"?: string;
    /**
     * Waypoint Pod请求的内存资源。
     * @example `128Mi`
     */
    "RequestMemory"?: string;
    /**
     * Waypoint Pod的CPU资源限制。
     * @example `2000m`
     */
    "LimitCPU"?: string;
    /**
     * Waypoint Pod的内存资源限制。
     * @example `1024Mi`
     */
    "LimitMemory"?: string;
    /**
     * Waypoint Pod的副本数。
     * @example `1`
     */
    "Replicas"?: number;
    /**
     * 是否开启HPA。
     * @example `false`
     */
    "HPAEnabled"?: boolean;
    /**
     * HPA目标CPU使用率。
     * @example `93`
     */
    "HPATargetCPU"?: number;
    /**
     * HPA目标内存使用率。
     * @example `91`
     */
    "HPATargetMemory"?: number;
    /**
     * HPA最小副本数。
     * @example `2`
     */
    "HPAMinReplicas"?: number;
    /**
     * HPA最大副本数。
     * @example `4`
     */
    "HPAMaxReplicas"?: number;
    /**
     * 是否优先调度到ECI节点。
     * @example `false`
     */
    "PreferECI"?: boolean;
}
