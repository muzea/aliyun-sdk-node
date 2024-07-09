export interface SetInstanceHealthRequest {
    /**
     * 伸缩组内实例的ID。
     * @example `i-bp1ap6bro51a7fsa****`
     */
    "InstanceId": string;
    /**
     * 设置实例的健康状态，取值范围：
     * - Healthy：设置为健康状态。
     * - Unhealthy：设置为不健康状态。
     * @example `Healthy`
     */
    "HealthStatus": string;
}
