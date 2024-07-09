export interface ListAlternativeSnapshotReposResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 仓库地址。
         * @example `RepoPath`
         */
        repoPath: string;
        /**
         * 实例ID。
         * @example `es-cn-6ja1ro4jt000c****`
         */
        instanceId: string;
    }[];
}
