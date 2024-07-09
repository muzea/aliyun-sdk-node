export interface DescribeDownloadTaskTypeRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为10。可设置的最大值为50。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页查询时，返回第几页数据。
     * 默认值为**1**，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 任务类型。
     * @example `InternetFirewallAsset`
     */
    "TaskType"?: string;
}
