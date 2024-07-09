export interface UpdateChartNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库命名空间名称
     * @example `test`
     */
    "NamespaceName": string;
    /**
     * 是否自动创建仓库，取值：
     * - `true`：自动创建仓库
     * - `false`：不自动创建仓库
     * @example `true`
     */
    "AutoCreateRepo"?: boolean;
    /**
     * 默认仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PUBLIC`
     */
    "DefaultRepoType"?: string;
}
