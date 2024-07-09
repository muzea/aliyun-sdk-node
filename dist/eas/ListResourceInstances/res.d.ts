export interface ListResourceInstancesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 实例列表。
     */
    Instances: any[];
    /**
     * 返回查询的资源组机器列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的资源组机器数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 实例总数。
     * @example `2`
     */
    TotalCount: number;
}
