export interface UpdateMetricDropRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * prometheus实例Id。
     * @example `c3ca36c8e2693403d85c0d9f8bb1d7b6c`
     */
    "ClusterId"?: string;
    /**
     * 废弃指标列表，每行一个指标名称。
     * @example `apiserver_request_duration_seconds_bucket
    etcd_request_duration_seconds_bucket
    apiserver_request_total
    container_tasks_state`
     */
    "MetricDrop"?: string;
}
