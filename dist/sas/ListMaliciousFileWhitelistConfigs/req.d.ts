export interface ListMaliciousFileWhitelistConfigsRequest {
    /**
     * 业务来源，可为空，默认为agentless。
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 返回数据当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 告警名称：
     * - ALL： 全部告警类型
     * @example `ALL`
     */
    "EventName"?: string;
}
