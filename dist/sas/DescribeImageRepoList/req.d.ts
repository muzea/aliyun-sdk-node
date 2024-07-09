export interface DescribeImageRepoListRequest {
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 防御开关类型。取值：
     * - **image_repo**：镜像仓防御
     * @example `image_repo`
     */
    "Type": string;
    /**
     * 防御开关的配置的操作维度。取值：
     * - **image_repo**：镜像仓ID
     * @example `image_repo`
     */
    "TargetType": string;
    /**
     * 镜像仓库的名称。
     * @example `script7`
     */
    "RepoName"?: string;
    /**
     * 容器镜像仓库的命名空间。
     * @example `libssh2`
     */
    "RepoNamespace"?: string;
    /**
     * 操作类型。取值：
     * - **count**：统计
     * - **other**：其他
     * @example `count`
     */
    "OperateType"?: string;
    /**
     * 检索字段。取值：
     * - **repoName**：镜像仓名称
     * - **repoNamespace**：镜像仓命名空间
     * > **OperateType**为**other**时该参数有效。
     * @example `repoName`
     */
    "FieldName"?: string;
    /**
     * 检索字段对应值。
     * > **OperateType**为**other**时该参数有效。
     * @example `zeus`
     */
    "FieldValue"?: string;
}
