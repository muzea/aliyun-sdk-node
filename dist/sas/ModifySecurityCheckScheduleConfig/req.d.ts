export interface ModifySecurityCheckScheduleConfigRequest {
    /**
     * 访问源IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置检测周期。支持设置多天，多天之间使用英文逗号隔开。取值：
     * - **1**：周一
     * - **2**：周二
     * - **3**：周三
     * - **4**：周四
     * - **5**：周五
     * - **6**：周六
     * - **7**：周日
     * @example `4,5,6`
     */
    "DaysOfWeek": string;
    /**
     * 设置检测开始时间。取值：
     * - **0**：在00:00~6:00开始检测
     * - **6**：在6:00~12:00开始检测
     * - **12**：在12:00~18:00开始检测
     * - **18**：在18:00~24:00开始检测
     * @example `6`
     */
    "StartTime": number;
    /**
     * 设置检测结束时间。取值：
     * - **0**：在00:00~6:00结束检测
     * - **6**：在6:00~12:00结束检测
     * - **12**：在12:00~18:00结束检测
     * - **18**：在18:00~24:00结束检测
     * @example `12`
     */
    "EndTime": number;
}