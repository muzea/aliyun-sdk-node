export interface DescribeAppEnvsRequest {
    /**
     * 环境ID
     * @example `we-5d22b3816f48e5478fd*****`
     */
    "EnvId"?: string;
    /**
     * 环境所属的应用ID
     * @example `wa-5cef9f96dd351b61df0*****`
     */
    "AppId"?: string;
    /**
     * 是否包含已释放的环境
     * @example `true`
     */
    "IncludeTerminated"?: boolean;
    /**
     * 每页查询数据量，默认为10条
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页数，默认为第1页
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 环境名称
     * @example `Test1`
     */
    "EnvName"?: string;
    /**
     * 环境搜索关键字
     * @example `Test`
     */
    "EnvSearch"?: string;
    /**
     * 是否查询最近变更环境，默认为false
     * @example `false`
     */
    "RecentUpdated"?: boolean;
    /**
     * 技术栈搜索关键字
     * @example `Java`
     */
    "StackSearch"?: string;
    "RegionId"?: string;
}
