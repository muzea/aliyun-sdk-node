export interface GetHoneypotEventTrendRequest {
    /**
     * 攻击源IP。
     * @example `10.91.254.***`
     */
    "SrcIp": string;
    /**
     * 开始时间，时间戳格式。
     * @example `1683516557757`
     */
    "StartTimeStamp"?: number;
    /**
     * 结束时间，时间戳格式。
     * @example `1687831329169`
     */
    "EndTimeStamp"?: number;
    /**
     * 风险等级列表。
     */
    "RiskLevelList"?: string[];
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
