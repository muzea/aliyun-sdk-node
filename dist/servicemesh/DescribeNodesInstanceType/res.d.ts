export interface DescribeNodesInstanceTypeResponse {
    /**
     * 节点类型信息列表
     */
    InstanceTypes: {
        /**
         * 节点机器类型
         * @example `ecs.g7.xlarge`
         */
        NodeType: string;
        /**
         * 是否支持MultiBuffer加速功能，取值：
         * - `true`：支持MultiBuffer加速功能
         * - `false`：不支持MultiBuffer加速功能
         * @example `true`
         */
        MultiBufferEnabled: boolean;
        /**
         * 支持MultiBuffer优化的节点标签key（如果填写了该值，则只会在pod调度到带有该标签，且标签值等于`value`时启用MultiBuffer优化）
         * @example `feature.node.kubernetes.io/mb-feature-enable`
         */
        Key: string;
        /**
         * 支持MultiBuffer优化的节点标签的值（如果填写了该值，则只会在pod调度到带有该标签，且标签值等于`value`时启用MultiBuffer优化）
         * @example `true`
         */
        Value: string;
    }[];
    /**
     * 请求ID
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
}
