export interface QueryDatasetListRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 指定目录ID。
     * - 若该字段不为空，则获取该目录下的所有数据集。
     * @example `schemaad8aad00-9c55-4984-a767-b4e0ec60****`
     */
    "DirectoryId"?: string;
    /**
     * 是否递归包好子目录下的数据集。取值范围：
     * - true：返回directoryId目录下所有递归子目录下的数据集。
     * - false：仅返回directoryId指定目录下的数据集，不包含子目录下的。
     * @example `true`
     */
    "WithChildren"?: boolean;
    /**
     * 数据集名称搜索关键字。
     * @example `测试数据集`
     */
    "Keyword"?: string;
    /**
     * 数据集列表的当前页码：
     * - 起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：1000
     * @example `10`
     */
    "PageSize"?: number;
}
