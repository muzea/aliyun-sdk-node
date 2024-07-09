export interface UpdateServiceAutoScalerRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 最小实例数，需要大于0。
         * @example `2`
         */
        min: number;
        /**
         * 最大实例数，需要大于Min Replica。
         * @example `8`
         */
        max: number;
        /**
         * 伸缩策略列表。
         */
        scaleStrategies: {
            /**
             * 指标名称，取值如下：
             * - qps：单实例QPS伸缩阈值。
             * - cpu：CPU利用率阈值。
             * @example `qps`
             */
            metricName: string;
            /**
             * 触发自动伸缩阈值。
             * - 指标名称配置为qps：当单实例的平均QPS大于该值时会触发扩容。
             * - 指标名称配置为cpu：当单实例的平均CPU使用率大于该值时会触发扩容。
             * @example `100`
             */
            threshold: number;
            /**
             * 指标所属服务，不配置默认为当前服务。
             * @example `demo_svc`
             */
            service: string;
        }[];
        /**
         * 自动扩缩容时的行为。
         */
        behavior: {
            /**
             * 扩容时的行为
             */
            scaleUp: {
                /**
                 * 扩容稳定窗口期时间，默认值为0。
                 * 只有当过去一段时间内的指标均满足条件，才会执行扩容。
                 * @example `0`
                 */
                stabilizationWindowSeconds: number;
            };
            /**
             * 缩容时的行为。
             */
            scaleDown: {
                /**
                 * 缩容稳定窗口期时间，默认值为300。
                 * 只有当过去一段时间内的指标均不满足条件，才会执行缩容。
                 * @example `300`
                 */
                stabilizationWindowSeconds: number;
            };
            /**
             * 缩容到0时的行为。
             */
            onZero: {
                /**
                 * 缩容到0之前的等待期，默认为600。
                 * 当指标满足缩容到0的条件时，需要经过等待期的时间，才会执行缩容到0。
                 * @example `600`
                 */
                scaleDownGracePeriodSeconds: number;
                /**
                 * 当从0开始扩容时，一次性创建的实例数。默认值为1。
                 * @example `1`
                 */
                scaleUpActivationReplicas: number;
            };
        };
    };
}
