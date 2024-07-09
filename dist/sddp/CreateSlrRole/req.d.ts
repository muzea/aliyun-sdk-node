export interface CreateSlrRoleRequest {
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
}
