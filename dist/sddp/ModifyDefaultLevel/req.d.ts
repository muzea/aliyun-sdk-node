export interface ModifyDefaultLevelRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 未能识别数据的默认风险等级ID。
     * - **1**：N/A。
     * - **2**：S1。
     * - **3**：S2。
     * - **4**：S3。
     * - **5**：S4。
     * @example `4`
     */
    "DefaultId"?: number;
    /**
     * 归类为“敏感”的数据风险等级ID，多个ID以半角逗号隔开。取值：
     * - **1**：N/A。
     * - **2**：S1。
     * - **3**：S2。
     * - **4**：S3。
     * - **5**：S4。
     * @example `1,2,3,4`
     */
    "SensitiveIds"?: string;
}
