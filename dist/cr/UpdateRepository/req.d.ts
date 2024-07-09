export interface UpdateRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库ID
     * @example `crr-tquyps22md8p****`
     */
    "RepoId"?: string;
    /**
     * 仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PUBLIC`
     */
    "RepoType": string;
    /**
     * 摘要信息
     * @example `test repo`
     */
    "Summary": string;
    /**
     * 仓库介绍
     * @example `repo-for-test`
     */
    "Detail"?: string;
    /**
     * 镜像tag不可变性，取值：
     * - `true`：开启
     * - `false`：关闭
     * @example `true`
     */
    "TagImmutability"?: boolean;
    /**
     * 仓库命名空间名称
     * @example `ejiayou-other`
     */
    "RepoNamespaceName"?: string;
    /**
     * 仓库名称
     * @example `dsp/domain-microapp`
     */
    "RepoName"?: string;
}
