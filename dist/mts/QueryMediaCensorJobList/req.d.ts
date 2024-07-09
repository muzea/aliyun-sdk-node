export interface QueryMediaCensorJobListRequest {
    /**
     * 媒体审核作业ID。可以从[提交媒体审核作业](~~91779~~)的返回参数中获取，多个使用半角逗号（,）分隔。
     * @example `fa9c34be3bcf42919ac4d1775239****,78dc866518b843259669df58ed30****`
     */
    "JobIds"?: string;
    /**
     * 下一页标识，第一次提交时为空即可。下一页标识将在第一次查询后返回。
     * @example `79aff3eee82242e092899db5f669****`
     */
    "NextPageToken"?: string;
    /**
     * 每页最大返回数。
     * - 默认：**30**
     * - 取值：**1~300**
     * @example `20`
     */
    "MaximumPageSize"?: number;
    /**
     * 需要查询的作业状态。取值：
     * - **All**：全部。
     * - **Queuing**：排队中。
     * - **Analysing**：分析中。
     * - **Fail**：失败。
     * - **Success**：成功。
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
     * @example `c5b30b7c0d0e4a0abde1d5f9e751****`
     */
    "PipelineId"?: string;
}
