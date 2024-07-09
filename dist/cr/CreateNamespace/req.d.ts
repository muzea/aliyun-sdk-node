export interface CreateNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称，长度为 2 - 120 位，可填写小写英文字母、数字，可使用的分隔符包括“_”、“-”、“.”（分隔符不能在首位或末位）
     * @example `namespace1`
     */
    "NamespaceName": string;
    /**
     * 是否自动创建镜像仓库
     * @example `true`
     */
    "AutoCreateRepo"?: boolean;
    /**
     * 自动创建仓库默认类型，取值：
     * - `PUBLIC`：公开
     * - `PRIVATE`：私有
     * @example `PUBLIC`
     */
    "DefaultRepoType"?: string;
}
