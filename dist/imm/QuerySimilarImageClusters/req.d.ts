export interface QuerySimilarImageClustersRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * > 在一次查询中首次调用此接口时，将此值设置为空。
     * @example `CAESEgoQCg4KClVwZGF0ZVRpbWUQARgBIs8ECgkAAJLUwUCAQ****`
     */
    "NextToken"?: string;
    /**
     * 返回聚类列表中最大任务数量。取值范围为（0，100 ]，默认值为100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 自定义标签，用于根据标签过滤任务。
     * @example `{"key": "val"}`
     */
    "CustomLabels"?: string;
    /**
     * 排序字段，可选值如下：
     * - CreateTime：分类的创建时间。
     * - UpdateTime：分类的更新时间（默认）。
     * @example `UpdateTime`
     */
    "Sort"?: string;
    /**
     * 排序方式。取值范围如下：
     * - asc：升序。
     * - desc：降序（默认）。
     * @example `asc`
     */
    "Order"?: string;
}
