export interface CreateRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库名称
     * @example `repo1`
     */
    "RepoName": string;
    /**
     * 镜像仓库命名空间名称
     * @example `namespace01`
     */
    "RepoNamespaceName": string;
    /**
     * 仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PRIVATE`
     */
    "RepoType": string;
    /**
     * 仓库摘要
     * @example `repo1`
     */
    "Summary": string;
    /**
     * 仓库详细描述
     * @example `repo1`
     */
    "Detail"?: string;
    /**
     * 镜像tag不可变性，取值：
     * - `true`：开启
     * - `false`：关闭
     * @example `true`
     */
    "TagImmutability"?: boolean;
}
