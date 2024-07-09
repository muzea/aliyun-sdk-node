export interface ListBatchMediaProducingJobsRequest {
    /**
     * 一键成片任务Id
     * @example `****d80e4e4044975745c14b****`
     */
    "JobId"?: string;
    /**
     * 任务类型
     * @example `Script`
     */
    "JobType"?: string;
    /**
     * 任务状态
     * @example `Finished`
     */
    "Status"?: string;
    /**
     * 开始时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-02-02T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-06-05T15:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 查询结果排序。取值：
     * - desc（默认值）：按创建时间倒序。
     * - asc：按创建时间升序。
     * @example `desc`
     */
    "SortBy"?: string;
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `mRZkKAovub0xWVfH14he4Q==`
     */
    "NextToken"?: string;
    /**
     * 本次请求所返回的最大记录条数
     * @example `100`
     */
    "MaxResults"?: number;
}
