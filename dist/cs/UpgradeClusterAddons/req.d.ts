export interface UpgradeClusterAddonsRequest {
    /**
     * 集群ID。
     * @example `cf4299b79b3e34226abfdc80a4bda****`
     */
    "ClusterId": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 组件名称。
         * @example `coredns`
         */
        component_name: string;
        /**
         * 可升级版本。调用`DescribeClusterAddonsVersion`参数可以查看可以升级的版本。
         * @example `1.6.7`
         */
        next_version: string;
        /**
         * 当前版本。
         * @example `v1.6.2`
         */
        version: string;
        /**
         * 组件自定义参数，使用JSON字符串编码。
         * @example `{\"CpuRequest\":\"800m\"}`
         */
        config: string;
        /**
         * 组件升级策略。可选值：
         * - overwrite：覆盖升级。
         * - canary：金丝雀升级。
         * @example `canary`
         */
        policy: string;
    }[];
}
