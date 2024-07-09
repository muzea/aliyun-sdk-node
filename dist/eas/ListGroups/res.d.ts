export interface ListGroupsResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务群组列表。
     */
    Groups: any[];
    /**
     * 返回每页显示的群组数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 返回查询的群组列表的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总计数量。
     * @example `5`
     */
    TotalCount: number;
}
