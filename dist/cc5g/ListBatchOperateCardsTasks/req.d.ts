export interface ListBatchOperateCardsTasksRequest {
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 批量操作任务的状态。
     */
    "Statuses"?: string[];
    /**
     * 批量操作任务的id列表。
     */
    "BatchOperateCardsTaskIds"?: string[];
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 批量操作的名称。
     */
    "Names"?: string[];
}
