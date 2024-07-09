export interface ListTrainingJobsRequest {
    /**
     * 归属运营活动过滤。
     * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
     */
    "CampaignId"?: string;
    /**
     * 训练任务名称过滤。
     * @example `VIP客户`
     */
    "Name"?: string;
    /**
     * 训练任务列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的训练任务数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 训练任务备注过滤。
     * @example `充值大于一万`
     */
    "Remark"?: string;
    /**
     * 训练任务状态过滤，取值如下：
     * - 0: 队列中。
     * - 1: 已提交。
     * - 2: 运行中。
     * - 3: 成功。
     * - 4: 失败。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 归属训练计划过滤。
     * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
     */
    "TrainingScheduleId"?: string;
    /**
     * 关联运营活动名称
     * @example `双11活动`
     */
    "CampaignName"?: string;
}
