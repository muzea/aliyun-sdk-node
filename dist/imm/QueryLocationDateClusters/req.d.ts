export interface QueryLocationDateClustersRequest {
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
     * 要查询的分组ID。如果您需要获得某个特定时空聚类分组的信息，则传入该参数。否则留空，通过其他参数查询符合匹配条件的分组。
     * @example `location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9`
     */
    "ObjectId"?: string;
    /**
     * 时空聚类的标题，模糊匹配。
     * @example `杭州`
     */
    "Title"?: string;
    /**
     * 地址信息。
     */
    "Address"?: any;
    /**
     * 要查询的时空聚类分组的行政级别。
     */
    "LocationDateClusterLevels"?: string[];
    /**
     * 分组起始时间的范围。
     */
    "LocationDateClusterStartTimeRange"?: any;
    /**
     * 分组结束时间的范围。
     */
    "LocationDateClusterEndTimeRange"?: any;
    /**
     * 时空聚类分组生成的时间范围。
     */
    "CreateTimeRange"?: any;
    /**
     * 时空聚类分组更新的时间范围。
     */
    "UpdateTimeRange"?: any;
    /**
     * 翻页标记。
     * @example `MzQNjmY2MzYxNhNjk2ZNjEu****`
     */
    "NextToken"?: string;
    /**
     * 每页显示数量，取值范围为\[1,100]，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 自定义标签查询条件。
     * @example `key=value`
     */
    "CustomLabels"?: string;
    /**
     * 排序字段。
     * @example `LocationDateClusterStartTime`
     */
    "Sort"?: string;
    /**
     * 排序顺序。
     * @example `asc`
     */
    "Order"?: string;
}
