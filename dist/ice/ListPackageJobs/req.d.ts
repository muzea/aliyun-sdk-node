export interface ListPackageJobsRequest {
    /**
     * 任务创建时间筛选条件的起始时间。格式为: yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-07-01T00:00:00Z`
     */
    "StartOfCreateTime"?: string;
    /**
     * 任务创建时间筛选条件的结束时间。格式为: yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-07-15T00:00:00Z`
     */
    "EndOfCreateTime"?: string;
    /**
     * 按 jobId 筛选。
     * @example `7b38a5d86f1e47838927b6e7ccb1****`
     */
    "JobId"?: string;
    /**
     * 任务状态。
     * - Init：已提交,
     * - Success：成功
     * - Fail：失败
     * @example `Success`
     */
    "Status"?: string;
    /**
     * 排序顺序。目前只支持两种：
     * - CreateTimeDesc：按创建时间降序
     * - CreateTimeAsc：按创建时间升序
     * @example `CreateTimeDesc`
     */
    "OrderBy"?: string;
    /**
     * 分页大小。范围：0~100，默认值：20。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 连续分页查询时下一页的标记（第一页没有）。
     * @example `ab4802364a2e49208c99efab82df****`
     */
    "NextPageToken"?: string;
}
