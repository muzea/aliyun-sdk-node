export interface CreateRepoTagRequest {
    /**
     * 实例ID
     * @example `cri-shac42yvqzv****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称
     * @example `ns`
     */
    "NamespaceName": string;
    /**
     * 镜像仓库名称
     * @example `repo1`
     */
    "RepoName": string;
    /**
     * 源镜像版本
     * @example `v1`
     */
    "FromTag": string;
    /**
     * 目标镜像版本
     * @example `v2`
     */
    "ToTag": string;
}
