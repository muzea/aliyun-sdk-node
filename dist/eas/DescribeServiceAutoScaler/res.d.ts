export interface DescribeServiceAutoScalerResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 服务最小实例数。
     * @example `3`
     */
    MinReplica: number;
    /**
     * 服务最大实例数。
     * @example `8`
     */
    MaxReplica: number;
    /**
     * 额外扩缩容策略。例如触发扩缩容前的等待时间。
     * @example `{
      "behavior": {
        "scaleDown": {
          "stabilizationWindowSeconds": 150
        }
      }
    }`
     */
    Behavior: any;
    /**
     * 伸缩策略列表。
     */
    ScaleStrategies: {
        /**
         * 指标名称，可能值：
         * - QPS：单实例QPS伸缩阈值。
         * - CPU：CPU利用率阈值。
         * @example `QPS`
         */
        metricName: string;
        /**
         * 触发自动伸缩阈值。
         * - 指标名称配置为QPS：当单实例的平均QPS大于该值时会触发扩容。
         * - 指标名称配置为CPU：当单实例的平均CPU使用率大于该值时会触发扩容。
         * @example `10`
         */
        threshold: number;
        /**
         * 指标所属服务，不配置默认为当前服务。
         * @example `demo_svc`
         */
        service: string;
    }[];
    /**
     * 当前指标列表。
     */
    CurrentMetrics: {
        /**
         * 指标名称。可能值：
         * - QPS
         * - CPU
         * @example `qps`
         */
        metricName: string;
        /**
         * 当前指标值。
         * @example `10`
         */
        value: number;
        /**
         * 指标所属服务。
         * @example `demo_svc`
         */
        service: string;
    }[];
}
