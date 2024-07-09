export interface RepairClusterNodePoolRequest {
    /**
     * 集群ID
     * @example `c2273b7f4a30d4ef6b43e0926cdd8****`
     */
    "cluster_id": string;
    /**
     * 节点池ID
     * @example `np613940c3593c4bea96faa8600cb9****`
     */
    "nodepool_id": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 节点列表，如果不指定则表示当前节点池内所有节点
         */
        nodes: string[];
        /**
         * 是否允许重启实例。
         * @example `true`
         */
        auto_restart: boolean;
        operations: {
            operation_id: string;
            args: string[];
        }[];
    };
}
