export interface DescribeTemplateAllRulesRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 行业模版ID。
     * >如不填本参数，默认返回主用模板的模型列表。
     * @example `1`
     */
    "TemplateId"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
