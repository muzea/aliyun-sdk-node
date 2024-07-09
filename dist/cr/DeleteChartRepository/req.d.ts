export interface DeleteChartRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称
     * @example `namespace01`
     */
    "RepoNamespaceName": string;
    /**
     * 仓库名称
     * @example `repo01`
     */
    "RepoName": string;
}
