export interface ListChainRequest {
    /**
     * 实例ID
     * @example `cri-4cdrlqmhn4gm****`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 命名空间名称
     * @example `ns1`
     */
    "RepoNamespaceName"?: string;
    /**
     * 镜像仓库名称
     * @example `repo1`
     */
    "RepoName"?: string;
}
