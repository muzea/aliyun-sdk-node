export interface FixNodePoolVulsRequest {
    /**
     * 集群ID。
     * @example `cf62854ac2130470897be7a27ed1f****`
     */
    "cluster_id": string;
    /**
     * 节点池ID。
     * @example `np31da1b38983f4511b490fc62108a****`
     */
    "nodepool_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 漏洞列表。
         */
        vuls: string[];
        /**
         * 待修复的节点名称列表。
         */
        nodes: string[];
        /**
         * 轮转修复策略。
         */
        rollout_policy: {
            /**
             * 轮转修复时的最大并行度，最小值为1，最大值为节点池节点数量。
             * @example `1`
             */
            max_parallelism: number;
        };
        /**
         * 是否允许重启。
         * @example `true`
         */
        auto_restart: boolean;
    };
}
