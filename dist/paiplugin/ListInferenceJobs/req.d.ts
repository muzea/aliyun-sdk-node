export interface ListInferenceJobsRequest {
    /**
     * 归属运营活动过滤。
     * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
     */
    "CampaignId"?: string;
    /**
     * 预测任务名称过滤。
     * @example `VIP客户`
     */
    "Name"?: string;
    /**
     * 分页数，从1开始，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 预测任务备注过滤。
     * @example `充值大于一万`
     */
    "Remark"?: string;
    /**
     * 预测任务状态过滤。
     * - 0: 队列中。
     * - 1: 已提交。
     * - 2: 运行中。
     * - 3: 成功。
     * - 4: 失败。
     * @example `0`
     */
    "Status"?: number;
    /**
     *
     * @example `双11活动`
     */
    "CampaignName"?: string;
    /**
     *
     * @example `test_job`
     */
    "TrainingJobName"?: string;
}
