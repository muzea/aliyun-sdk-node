export interface ListChartRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * Chart仓库状态，取值：
     * - `NORMAL`：显示正常的Chart仓库状态
     *
     * - `DELETING`：删除中的Chart仓库状态
     * @example `NORMAL`
     */
    "RepoStatus"?: string;
    /**
     * 仓库名称
     * @example `ns1`
     */
    "RepoName"?: string;
    /**
     * 命名空间
     * @example `repo1`
     */
    "RepoNamespaceName"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 单页条目数
     * @example `30`
     */
    "PageSize"?: number;
}
