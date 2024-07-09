export interface CreateChartNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称
     * @example `namespace01`
     */
    "NamespaceName": string;
    /**
     * 是否自动创建仓库，取值：
     * -` true`：自动创建仓库
     * -` false`：不自动创建仓库
     * @example `true`
     */
    "AutoCreateRepo"?: boolean;
    /**
     * 仓库默认类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PUBLIC`
     */
    "DefaultRepoType"?: string;
}
