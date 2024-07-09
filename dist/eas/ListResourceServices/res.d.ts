export interface ListResourceServicesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务列表。
     */
    Services: any[];
    /**
     * 返回查询的服务列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的服务数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 服务总数。
     * @example `2`
     */
    TotalCount: number;
}
