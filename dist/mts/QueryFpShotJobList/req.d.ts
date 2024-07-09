export interface QueryFpShotJobListRequest {
    /**
     * 需要查询的DNA作业ID列表，可以通过**[MPS控制台](https://mps.console.aliyun.com/overview)** > **任务管理** > **视频DNA**获取。一次最多查询10个，用半角逗号（,）分隔。
     * @example `88c6ca184c0e47098a5b665e2a12****`
     */
    "JobIds"?: string;
    /**
     * 下一页标识。第一次请求无需传入，服务会返回，第二次请求传入即可。
     * @example `16f01ad6175e4230ac42bb5182cd****`
     */
    "NextPageToken"?: string;
    /**
     * 每页最大返回数。
     * - 默认：10
     * - 取值：1~100
     * @example `10`
     */
    "MaximumPageSize"?: number;
    /**
     * 需要查询的作业状态。取值：
     * - All：全部。
     * - Queuing：排队中。
     * - Analysing：分析中。
     * - Fail：失败。
     * - Success：成功。
     * @example `All`
     */
    "State"?: string;
    /**
     * 最早任务创建时间。
     * - 日期格式按照ISO8601标准表示，并需要使用UTC时间。
     * - 格式为：YYYY-MM-DDThh:mm:ssZ 。
     * @example `2021-12-22T03:48:05Z`
     */
    "StartOfJobCreatedTimeRange"?: string;
    /**
     * 最晚任务创建时间。
     * - 日期格式按照ISO8601标准表示，并需要使用UTC时间。
     * - 格式为：YYYY-MM-DDThh:mm:ssZ 。
     * @example `2022-02-14T02:16:07Z`
     */
    "EndOfJobCreatedTimeRange"?: string;
    /**
     * 管道ID。可以通过[**媒体处理控制台**](https://mps.console.aliyun.com/overview) > **全局设置** > **管道及回调**获取。
     * @example `b11c171cced04565b1f38f1ecc39****	`
     */
    "PipelineId"?: string;
}
