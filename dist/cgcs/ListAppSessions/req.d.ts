export interface ListAppSessionsRequest {
    /**
     * 平台会话ID列表
     */
    "PlatformSessionIds"?: string[];
    /**
     * 自定义会话ID列表
     */
    "CustomSessionIds"?: string[];
    /**
     * 分页查询时设置的每页行数。最大值100，默认值20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 实例列表的页码。起始值1，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 应用ID
     * @example `13027XXXX`
     */
    "AppId"?: string;
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId"?: string;
}
