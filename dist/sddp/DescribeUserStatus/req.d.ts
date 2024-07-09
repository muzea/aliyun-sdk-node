export interface DescribeUserStatusRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 此参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
