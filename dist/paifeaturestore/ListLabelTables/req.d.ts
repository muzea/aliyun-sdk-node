export interface ListLabelTablesRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `featurestore-test*`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `project1`
     */
    "ProjectId": string;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 页码，起始值为1，默认值为10。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * label表名称。
     * @example `label_table1`
     */
    "Name"?: string;
    /**
     * 创建人的阿里云账号ID。
     * @example `1231432432****`
     */
    "Owner"?: string;
    /**
     * 排序依据。
     * @example `GmtModifiedTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * - Asc - 升序排序。
     * - Desc - 降序排序。
     * @example `Asc`
     */
    "Order"?: string;
    /**
     * Label表ID过滤。
     */
    "LabelTableIds"?: string[];
}
