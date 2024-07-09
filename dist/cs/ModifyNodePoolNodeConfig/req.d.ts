export interface ModifyNodePoolNodeConfigRequest {
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np8d8c9c2cd0f64e89884f82a5fbcd****`
     */
    "NodepoolId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * kubelet参数配置。
         */
        kubelet_config: any;
        /**
         * 轮转配置。
         */
        rolling_policy: {
            /**
             * 最大不可用节点数。
             * @example `3`
             */
            max_parallelism: number;
        };
        os_config: {
            sysctl: any;
        };
    };
}
