export interface ListBaselineCheckWhiteRecordRequest {
    /**
     * 检查项ID列表。
     */
    "CheckIds"?: number[];
    /**
     * 白名单记录的ID列表。
     */
    "RecordIds"?: number[];
    /**
     * 数据来源，为空时默认查询主机。取值：
     * - **default**：主机
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查项名称模糊匹配。
     * @example `redis`
     */
    "CheckItemFuzzy"?: string;
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize"?: number;
}
