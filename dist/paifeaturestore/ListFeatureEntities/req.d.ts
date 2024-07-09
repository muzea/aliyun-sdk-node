export interface ListFeatureEntitiesRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `3`
     */
    "ProjectId": string;
    /**
     * 特征实体名称过滤。
     * @example `feature_entity_1`
     */
    "Name"?: string;
    /**
     * 页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 创建人的阿里云账号ID。
     * @example `1231432*****`
     */
    "Owner"?: string;
    /**
     * 排序依据。
     * @example `GmtModifiedTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式，可选值包括：
     * - Asc - 升序排序。
     * - Desc - 降序排序。
     * @example `Desc`
     */
    "Order"?: string;
    /**
     * 特征实体ID过滤。
     */
    "FeatureEntityIds"?: string[];
}
