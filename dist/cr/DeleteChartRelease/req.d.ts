export interface DeleteChartReleaseRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * Chart名称
     * @example `chart3`
     */
    "Chart": string;
    /**
     * Chart版本
     * @example `0.1.0`
     */
    "Release": string;
    /**
     * 仓库名称
     * @example `repo1`
     */
    "RepoName": string;
    /**
     * 命名空间名称
     * @example `ns1`
     */
    "RepoNamespaceName": string;
}
