export interface UnInstallClusterAddonsRequest {
    /**
     * 集群ID。
     * @example `c5b5e80b0b64a4bf6939d2d8fbbc5****`
     */
    "ClusterId": string;
    /**
     * 组件列表，结构为数组。
     */
    "addons"?: {
        /**
         * 组件名称。
         * @example `ack-node-problem-detector`
         */
        name: string;
        /**
         * 是否清理云资源。
         * @example `true`
         */
        cleanup_cloud_resources: boolean;
    }[];
}
