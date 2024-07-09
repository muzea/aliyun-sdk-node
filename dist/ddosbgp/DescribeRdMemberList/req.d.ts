export interface DescribeRdMemberListRequest {
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源目录ID。
     * @example `rd-x9bL**`
     */
    "ResourceDirectoryId"?: string;
}
