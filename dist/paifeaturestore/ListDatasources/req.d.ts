export interface ListDatasourcesRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `featureStore-cn-XXXXXXX`
     */
    "InstanceId": string;
    /**
     * 工作空间ID，可从接口[ListWorkspaces](~~449124~~)获取。
     * @example `234`
     */
    "WorkspaceId"?: string;
    /**
     * 数据源类型，取值如下：
     * ● Hologres
     * ● Redis
     * ● GraphCompute
     * ● MaxCompute
     * @example `MaxCompute`
     */
    "Type"?: string;
    /**
     * 数据源名称。
     * @example `datasource1`
     */
    "Name"?: string;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 排序方式，取值如下：
     * - Asc - 升序排列。
     * - Desc - 降序排列。
     * @example `Asc`
     */
    "Order"?: string;
    /**
     * 排序依据。
     * @example `GmtModifiedTime`
     */
    "SortBy"?: string;
}
