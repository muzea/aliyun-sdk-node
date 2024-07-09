export interface ListProjectsRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 工作空间ID，可通过工作空间接口[ListWorkspaces](~~449124~~)获取。
     * @example `234`
     */
    "WorkspaceId"?: string;
    /**
     * 项目名称过滤。
     * @example `fs1`
     */
    "Name"?: string;
    /**
     * 项目所有者的阿里云账号ID。
     * @example `134324352****`
     */
    "Owner"?: string;
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
     * 排序方式。
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
    /**
     * 项目ID过滤。
     */
    "ProjectIds"?: string[];
}
