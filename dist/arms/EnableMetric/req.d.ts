export interface EnableMetricRequest {
    /**
     * 集群ID。
     * @example `ccfa5e34a5c1f4ce6b916a40a12151d88`
     */
    "ClusterId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 启用指标名。
     * @example `kube_pod_container_status_ready`
     */
    "DropMetric"?: string;
}
