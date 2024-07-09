export interface DeleteRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-l4933wbcmun2****`
     */
    "RepoId"?: string;
    /**
     * 仓库名称
     * @example `test-repo`
     */
    "RepoName"?: string;
    /**
     * 命名空间名称
     * @example `test-namespace`
     */
    "RepoNamespaceName"?: string;
}
