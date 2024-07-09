export interface ListHoneypotEventsRequest {
    /**
     * 事件状态。取值：
     * - **y**：已经处理。
     * - **n**：未处理。
     * - **a**：所有。
     * @example `y`
     */
    "Dealed"?: string;
    /**
     * 告警的ID。
     * @example `1259925`
     */
    "AlarmEventId"?: number;
    /**
     * 风险等级列表。
     */
    "RiskLevelList"?: string[];
    /**
     * 蜜罐ID列表。
     */
    "HoneypotIdList"?: string[];
    /**
     * 探针ID列表。
     */
    "AgentIdList"?: string[];
    /**
     * 指定分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2F9CE167-58D5-5DA6-AA3B-923EED02****`
     */
    "RequestId"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 攻击源IP。
     * @example `185.237.96.***`
     */
    "SrcIp"?: string;
    /**
     * 攻击者画像ID。
     * @example `cd48604a-1694-4f03-ade0-ec6994c3*****`
     */
    "PortraitId"?: string;
}
