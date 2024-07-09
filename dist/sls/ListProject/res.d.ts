export interface ListProjectResponse {
    /**
     * 当前页返回的Project个数。
     * @example `2`
     */
    count: number;
    /**
     * 符合查询条件的Project总数。
     * @example `11`
     */
    total: number;
    /**
     * 符合查询条件Project列表。
     * @example `不涉及`
     */
    projects: any[];
}
