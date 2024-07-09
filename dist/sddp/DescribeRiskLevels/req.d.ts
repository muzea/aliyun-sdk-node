export interface DescribeRiskLevelsRequest {
    /**
     * 指定请求和接收消息的语言类型。取值：
     * - zh_cn：默认值，中文。
     * - en_us：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 行业模版ID。
     * @example `1`
     */
    "TemplateId"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
