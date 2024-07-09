export interface ListAvatarTrainingJobsRequest {
    /**
     * - 分页页码
     * - 默认值：1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * - 分页页面大小
     * - 默认值：10
     * - 最大值：100
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * - 任务状态
     * - 取值范围：Init（初始化、草稿）、Queuing（排队中）、Training（训练中）、Success（训练成功）、Fail（训练失败）
     * @example `Success`
     */
    "Status"?: string;
}
