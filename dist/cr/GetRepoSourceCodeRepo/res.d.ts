export interface GetRepoSourceCodeRepoResponse {
    /**
     * 源代码平台类型，取值：`GITHUB`、`GITLAB`、`GITEE`、`CODE`、`CODEUP`
     * @example `GITHUB`
     */
    CodeRepoType: string;
    /**
     * 镜像仓库ID
     * @example `crr-gzsrlevmvoaq****`
     */
    RepoId: string;
    /**
     * 请求ID
     * @example `4CE1F661-75DD-4EBD-A4AD-057B26834ABB`
     */
    RequestId: string;
    /**
     * 源代码仓库命名空间名称
     * @example `namespace`
     */
    CodeRepoNamespaceName: string;
    /**
     * 是否打开海外源智能构建加速，取值：
     * - `true`：打开海外源智能构建加速
     * - `false`：关闭海外源智能构建加速
     * @example `false`
     */
    OverseaBuild: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 源代码仓库名称
     * @example `repo`
     */
    CodeRepoName: string;
    /**
     * 是否打开源代码提交自动触发构建，取值：
     * - `true`：打开源代码提交自动触发构建
     * - `false`：关闭源代码提交自动触发构建
     * @example `true`
     */
    AutoBuild: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 是否关闭构建缓存，取值：
     * - `true`：关闭构建缓存
     * - `false`：打开构建缓存
     * @example `false`
     */
    DisableCacheBuild: string;
    /**
     * 源代码仓库地址
     * @example `https://github.com`
     */
    CodeRepoDomain: string;
}
