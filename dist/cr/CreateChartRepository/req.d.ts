export interface CreateChartRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库名称
     * @example `repo01`
     */
    "RepoName": string;
    /**
     * 命名空间名称
     * @example `namespace01`
     */
    "RepoNamespaceName": string;
    /**
     * 仓库默认类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * RepoType与Summary参数二选一，该参数非必选。
     * @example `PUBLIC`
     */
    "RepoType"?: string;
    /**
     * 仓库摘要
     * @example `summary`
     */
    "Summary"?: string;
}
