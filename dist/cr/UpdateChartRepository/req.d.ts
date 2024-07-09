export interface UpdateChartRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PUBLIC`
     */
    "RepoType"?: string;
    /**
     * 摘要信息
     * @example `test`
     */
    "Summary"?: string;
    /**
     * 仓库命名空间名称
     * @example `test`
     */
    "RepoNamespaceName": string;
    /**
     * 仓库名称
     * @example `test`
     */
    "RepoName": string;
}
