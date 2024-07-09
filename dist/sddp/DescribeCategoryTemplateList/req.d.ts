export interface DescribeCategoryTemplateListRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh_cn**。
     * 取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置每页数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值：1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 接口调用场景，默认为**null**。
     * 取值：
     * - **null**：旧版本
     * - **0**：旧版本
     * - **1**：新版本
     * @example `1`
     */
    "UsageScenario"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
