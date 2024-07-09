export interface ListResourcesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 资源组列表。
     */
    Resources: any[];
    /**
     * 返回查询的专属资源组列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的专属资源组数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 资源组总数。
     * @example `1`
     */
    TotalCount: number;
}
