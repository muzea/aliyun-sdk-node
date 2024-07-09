export interface UpdateWaypointRequest {
    /**
     * 服务网格实例ID。
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
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
    "Namespace": string;
    /**
     * Waypoint名称。
     * @example `bookinfo-reviews`
     */
    "Name": string;
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
     * @example `91`
     */
    "HPATargetCPU"?: number;
    /**
     * HPA目标内存使用率。
     * @example `89`
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
