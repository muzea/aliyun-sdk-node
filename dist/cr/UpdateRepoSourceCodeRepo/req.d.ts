export interface UpdateRepoSourceCodeRepoRequest {
    /**
     * 企业版实例ID
     * @example `cri-shac42yvqzvq****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-gzsrlevmvoa****`
     */
    "RepoId": string;
    /**
     * 源代码平台类型。支持：GITHUB、GITLAB、GITEE、CODEUP、CODE
     * @example `GITHUB`
     */
    "CodeRepoType": string;
    /**
     * 源代码仓库命名空间名称
     * @example `namespace`
     */
    "CodeRepoNamespaceName": string;
    /**
     * 源代码仓库名称
     * @example `repo`
     */
    "CodeRepoName": string;
    /**
     * 是否开启提交代码自动触发构建，取值：
     * - `true`：开启提交代码自动触发构建
     * - `false`：不开启提交代码自动触发构建
     * @example `true`
     */
    "AutoBuild"?: string;
    /**
     * 是否开启海外构建模式，取值：
     * - `true`：开启海外构建模式
     * - `false`：不开启海外构建模式
     * @example `false`
     */
    "OverseaBuild"?: string;
    /**
     * 是否禁用构建缓存，取值：
     * - `true`：禁用构建缓存
     * - `false`：启用构建缓存
     * @example `false`
     */
    "DisableCacheBuild"?: string;
    /**
     * 代码仓库ID
     * @example `crr-cp7d6sget5r****`
     */
    "CodeRepoId"?: string;
}
