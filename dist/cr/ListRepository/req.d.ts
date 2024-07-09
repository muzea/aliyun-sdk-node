export interface ListRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库状态，取值：
     * - `NORMAL`：正常
     * - `DELETING`：删除中
     * - `DELETED`：已删除
     * - `ALL`：所有仓库状态
     * @example `ALL`
     */
    "RepoStatus"?: string;
    /**
     * 仓库名称
     * @example `repo-test`
     */
    "RepoName"?: string;
    /**
     * 仓库命名空间名称
     * @example `repo-namespace-test`
     */
    "RepoNamespaceName"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 一页展示的列表数
     * @example `30`
     */
    "PageSize"?: number;
}
