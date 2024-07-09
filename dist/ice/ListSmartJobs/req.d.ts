export interface ListSmartJobsRequest {
    /**
     * 当前开始读取的位置
     * @example `****73f33c91-d59383e8280b****`
     */
    "NextToken"?: string;
    /**
     * 本次请求所返回的最大记录条数。
     * 最大值：100，默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 任务类型
     * @example `ASR`
     */
    "JobType"?: string;
    /**
     * 排序参数，默认根据创建时间倒序
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 任务状态
     * @example `Finished`
     */
    "JobState"?: string;
}
