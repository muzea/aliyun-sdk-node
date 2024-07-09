export interface ListPipelineTriggersResponse {
    /**
     * 分页页码
     * @example `1`
     */
    pageNumber: number;
    /**
     * 每页大小
     * @example `10`
     */
    pageSize: number;
    /**
     * 查询到的结果数量
     * @example `1`
     */
    totalCount: number;
    /**
     * 查询的资源实体列表
     */
    data: any[];
}
