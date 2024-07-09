export interface UpdateNamespaceRequest {
    /**
     * 实例 ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称
     * @example `test`
     */
    "NamespaceName": string;
    /**
     * 允许推送时自动创建仓库
     * @example `true`
     */
    "AutoCreateRepo"?: boolean;
    /**
     * 默认仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PRIVATE`
     */
    "DefaultRepoType"?: string;
}
