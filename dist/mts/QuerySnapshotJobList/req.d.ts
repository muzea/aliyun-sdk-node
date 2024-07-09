export interface QuerySnapshotJobListRequest {
    /**
     * 截图作业ID列表。
     * - 一次最多查询**10**个，半角逗号（,）分隔。
     * - 可以通过[MPS控制台](https://mps.console.aliyun.com/overview)>**任务管理**>**截图获取**，也可以从[提交截图作业](~~602857~~)的返回参数中获取。
     * @example `72dfa5e679ab4be9a3ed9974c736****`
     */
    "SnapshotJobIds"?: string;
    /**
     * 下一页标识，32位UUID。
     * - 查询结果大于一页会返回NextPageToken参数，每次查询值都会更新。获取后请在下一次查询时填入。
     * @example `cc6cbef8e8d5481ca536f5d2a466****`
     */
    "NextPageToken"?: string;
    /**
     * 分页查询每页最大返回数。
     * - 取值范围：**\[1,300\]**。
     * - 默认值：**30**  。
     * @example `30`
     */
    "MaximumPageSize"?: number;
    /**
     * 需要查询的截图状态。
     * - **Submitted**：已提交。
     * - **Snapshoting**：截图中。
     * - **Success**：截图成功。
     * - **Fail**：截图失败。
     * @example `Snapshoting`
     */
    "State"?: string;
    /**
     * 最早任务创建时间。
     * - 日期格式按照ISO8601标准表示，并需要使用UTC时间。
     * - 格式为：YYYY-MM-DDThh:mm:ssZ 。
     * @example `2014-01-10T12:00:00Z`
     */
    "StartOfJobCreatedTimeRange"?: string;
    /**
     * 最晚任务创建时间。
     * - 日期格式按照ISO8601标准表示，并需要使用UTC时间。
     * - 格式为：YYYY-MM-DDThh:mm:ssZ 。
     * @example `2014-01-12T12:00:00Z`
     */
    "EndOfJobCreatedTimeRange"?: string;
    /**
     * 管道ID。详细信息请参见[基本概念](~~29197~~)。
     * - 可选值：可以通过[MPS控制台](https://mps.console.aliyun.com/overview)>**全局设置**>**管道**查询和创建。
     * - 如果需要异步通知，请为管道绑定MNS消息，详细说明请参见<props="china">[接收消息通知](https://help.aliyun.com/document_detail/42618.html)</props><props="intl">[接收消息通知](https://www.alibabacloud.com/help/zh/apsaravideo-for-media-processing/latest/receive-message-notifications)</props>。
     * @example `b11c171cced04565b1f38f1ecc39****`
     */
    "PipelineId"?: string;
}
