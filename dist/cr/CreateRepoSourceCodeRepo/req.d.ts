export interface CreateRepoSourceCodeRepoRequest {
    /**
     * 实例ID
     * @example `cri-shac42yvqzvq****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-gzsrlevmvoaq****`
     */
    "RepoId": string;
    /**
     * 源代码平台类型，取值：`GITHUB`、`GITLAB`、`GITEE`、`CODE`、`CODEUP`
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
     * 是否自动构建，取值：
     * - `true`：自动构建
     * - `false`：不自动构建
     * @example `true`
     */
    "AutoBuild"?: boolean;
    /**
     * 是否开启海外源智能构建加速，取值：
     * - `true`：开启海外源智能构建加速
     * - `false`：不开启海外源智能构建加速
     * @example `false`
     */
    "OverseaBuild"?: boolean;
    /**
     * 是否关闭构建缓存，取值：
     * - `true`：关闭构建缓存
     * - `false`：开启构建缓存
     * @example `false`
     */
    "DisableCacheBuild"?: boolean;
}
