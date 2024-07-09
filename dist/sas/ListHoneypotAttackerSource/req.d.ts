export interface ListHoneypotAttackerSourceRequest {
    /**
     * 攻击源IP。
     * @example `175.136.230.***`
     */
    "SrcIp"?: string;
    /**
     * 开始时间，时间戳格式。
     * @example `1674007632124`
     */
    "StartTimeStamp"?: number;
    /**
     * 结束时间，时间戳格式。
     * @example `1676945366221`
     */
    "EndTimeStamp"?: number;
    /**
     * 风险等级信息列表。
     */
    "RiskLevelList"?: string[];
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `20`
     */
    "PageSize"?: number;
}
