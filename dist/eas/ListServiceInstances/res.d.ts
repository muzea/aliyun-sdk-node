export interface ListServiceInstancesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务实例列表。
     */
    Instances: any[];
    /**
     * 返回查询的实例列表的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的实例数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 实例总数。
     * @example `1`
     */
    TotalCount: number;
}
