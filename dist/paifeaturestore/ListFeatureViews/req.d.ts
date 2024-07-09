export interface ListFeatureViewsRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 项目ID，可通过接口ListProjects获取。
     * @example `3`
     */
    "ProjectId": string;
    /**
     * 创建人过滤。
     * @example `1232143243242****`
     */
    "Owner"?: string;
    /**
     * 标签过滤。
     * @example `tag1`
     */
    "Tag"?: string;
    /**
     * 特征名称。
     * @example `feature1`
     */
    "FeatureName"?: string;
    /**
     * 排序依据。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * @example `Desc`
     */
    "Order"?: string;
    /**
     * 特征视图ID过滤。
     */
    "FeatureViewIds"?: string[];
    /**
     * 类型。
     * ● Batch-离线特征
     * ● Stream-实时特征
     * @example `Batch`
     */
    "Type"?: string;
    /**
     * 特征视图名称过滤。
     * @example `fv1`
     */
    "Name"?: string;
}
