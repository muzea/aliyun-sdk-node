export interface ListMediaProducingJobsRequest {
    /**
     * 合成任务状态
     * @example `Success`
     */
    "Status"?: string;
    /**
     * 任务类型
     * @example `EditingJob`
     */
    "JobType"?: string;
    /**
     * 开始时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，与StartTime相差不超过30天。格式为yyyy-mm-ddthh:mm:ssz（UTC时间）。
     * @example `2022-02-02T23:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 搜索关键词，可以根据任务ID搜索。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "Keyword"?: string;
    /**
     * 一键成片任务Id，当此条件不为空时，为查询一键成片任务的子任务。
     * @example `******8750b54e3c976a47da6f******`
     */
    "MasterJobId"?: string;
    /**
     * 当前开始读取的位置
     * @example `8EqYpQbZ6Eh7+Zz8DxVYoQ==`
     */
    "NextToken"?: string;
    /**
     * 本次请求所返回的最大记录条数。
     * 最大值：100，默认值：10
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 排序参数，默认按创建时间倒序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
}
