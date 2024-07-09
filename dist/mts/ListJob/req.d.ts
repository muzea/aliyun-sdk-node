export interface ListJobRequest {
    /**
     * 下一页标识。第一次请求无需传入，服务会返回，第二次请求传入即可。
     * @example `16f01ad6175e4230ac42bb5182cd****`
     */
    "NextPageToken"?: string;
    /**
     * 单页最大可返回媒体工作流执行实例。
     * - 默认值：**10**。
     * - 取值范围：**1~100**。
     * @example `10`
     */
    "MaximumPageSize"?: number;
    /**
     * 转码任务状态。默认为**All**（所有状态）。可取值：
     * - **All**：所有状态。
     * - **Submitted**：作业已提交。
     * - **Transcoding**：转码中。
     * - **TranscodeSuccess**：转码成功。
     * - **TranscodeFail**：转码失败。
     * - **TranscodeCancelled**：转码取消。
     * @example `All`
     */
    "State"?: string;
    /**
     * 创建转码作业时间范围中的下限值。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2014-01-10T12:00:00Z`
     */
    "StartOfJobCreatedTimeRange"?: string;
    /**
     * 创建转码作业时间的上限。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2014-01-11T12:00:00Z`
     */
    "EndOfJobCreatedTimeRange"?: string;
    /**
     * 管道ID。可以通过[MPS控制台](https://mps.console.aliyun.com/overview) > **全局设置** > **管道及回调**查询。
     * @example `88c6ca184c0e424d5w5b665e2a12****`
     */
    "PipelineId"?: string;
}
