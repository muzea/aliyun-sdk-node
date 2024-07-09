export interface DescribeDownloadTaskRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认为10。
     * 可设置值最大为50。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页查询时，设置当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 任务类型，枚举值。可填枚举值见接口：查询文件下载任务类型。不填默认查询所有文件。
     * @example `InternetFirewallAsset`
     */
    "TaskType"?: string;
}
