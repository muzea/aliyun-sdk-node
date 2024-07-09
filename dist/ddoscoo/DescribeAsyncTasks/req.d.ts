export interface DescribeAsyncTasksRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时，设置每页包含异步导出任务的数量。
     * @example `10`
     */
    "PageSize": number;
}
