export interface DescribeDataLimitSetRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 指定待查询产品的资源类型。取值：
     * - **1**：表示ODPS。
     * - **2**：表示OSS 。
     * - **3**：表示ADS 。
     * - **4**：表示OTS 。
     * - **5**：表示RDS。
     * @example `2`
     */
    "ResourceType"?: number;
    /**
     * 指定待查询资产的父类型资产ID。
     * 您可以通过[DescribeDataLimitDetail](~~DescribeDataLimitDetail~~)或[DescribeDataLimits](~~DescribeDataLimits~~)中返回的**ParentId**确定。
     * @example `db`
     */
    "ParentId"?: string;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
