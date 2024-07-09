export interface QueryFigureClustersRequest {
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
     * 排序字段。默认为空，表示按照分组ID排序。
     * @example `ImageCount`
     */
    "Sort"?: string;
    /**
     * 排序方式。默认为asc。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 自定义标签查询条件。
     * @example `key=value`
     */
    "CustomLabels"?: string;
    /**
     * 本次读取的最大数据记录数量，取值范围为0~100。
     * 不设置此参数或者设置为0时，则默认值为100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记，置空表示从头开始。
     * @example `10`
     */
    "NextToken"?: string;
    /**
     * 人脸聚类分组生成的时间范围。
     */
    "CreateTimeRange"?: any;
    /**
     * 人脸聚类分组更新的时间范围。
     */
    "UpdateTimeRange"?: any;
    /**
     * 是否返回当前查询条件下的所有人脸分组的数量。默认为false，表示不返回分组的数量。
     * @example `false`
     */
    "WithTotalCount"?: boolean;
}
