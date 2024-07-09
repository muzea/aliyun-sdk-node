export interface ListStackGroupOperationResultsRequest {
    /**
     * 资源栈组所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查询最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 操作ID。
     * 您可以调用[ListStackGroupOperations](~~151342~~)获取操作ID。
     * @example `6da106ca-1784-4a6f-a7e1-e723863d****`
     */
    "OperationId": string;
    /**
     * 分页查询时设置的每页行数。
     * - 取值范围：1~50。
     *
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时设置的页码。
     * - 起始值：1。
     *
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
