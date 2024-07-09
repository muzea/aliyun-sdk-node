export interface ListResourceInstanceWorkerResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * Worker列表。
     */
    Pods: any[];
    /**
     * 返回查询的资源组工作实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的资源组工作实例数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * Worker总数。
     * @example `1`
     */
    TotalCount: number;
}
