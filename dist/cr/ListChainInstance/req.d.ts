export interface ListChainInstanceRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 命名空间名称
     * @example `test-namespace`
     */
    "RepoNamespaceName"?: string;
    /**
     * 镜像仓库名称
     * @example `test-repo`
     */
    "RepoName"?: string;
}
