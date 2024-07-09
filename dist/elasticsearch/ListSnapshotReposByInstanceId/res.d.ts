export interface ListSnapshotReposByInstanceIdResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 引用仓库名称。
         * @example `aliyun_snapshot_from_es-cn-6ja1ro4jt000c****`
         */
        snapWarehouse: string;
        /**
         * 仓库地址。
         * @example `es-cn-6ja1ro4jt000c****`
         */
        repoPath: string;
        /**
         * 引用仓库状态。available表示生效；unavailable表示失效。
         * @example `available`
         */
        status: string;
        /**
         * 引用实例ID。
         * @example `es-cn-6ja1ro4jt000c****`
         */
        instanceId: string;
    }[];
}
