export interface ListCostUnitOrdersRequest {
    /**
     * 开始创建时间
     * @example `2021-11-16`
     */
    "BeginDate"?: string;
    /**
     * 结束创建时间
     * @example `2021-12-04 00`
     */
    "FinalDate"?: string;
    /**
     * 第几页
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
}
