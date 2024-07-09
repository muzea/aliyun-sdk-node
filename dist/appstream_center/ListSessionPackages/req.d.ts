export interface ListSessionPackagesRequest {
    /**
     * 云Flow项目ID。
     * @example `p-xxxxxxxxxxxx`
     */
    "ProjectId"?: string;
    /**
     * 会话包名称。
     * @example `测试会话包`
     */
    "SessionPackageName"?: string;
    /**
     * 自定义排序类型。
     * @example `ASC`
     */
    "SortType"?: string;
    /**
     * 会话包的唯一ID。
     * @example `tp-xxxxxxxx`
     */
    "SessionPackageId"?: string;
    /**
     * 每页展示数据（默认20条）。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 页码（首页传1）, 为空就获取所有数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 会话包状态列表。
     */
    "StateList"?: number[];
}
