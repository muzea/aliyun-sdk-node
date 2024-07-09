export interface ListProjectsResponse {
    /**
     * 当前页码，默认为1。页码从1开始
     * @example `1`
     */
    pageNumber: number;
    /**
     * 每页大小，默认为100。取值范围1~100
     * @example `100`
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
