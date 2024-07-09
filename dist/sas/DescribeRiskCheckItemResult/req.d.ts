export interface DescribeRiskCheckItemResultRequest {
    /**
     * 指定访问源的IP地址。
     * @example `173.128.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定要查询的云平台配置检查项的ID。
     * > 云平台配置检查支持的检查项的ID及其详细信息，请参见[DescribeRiskCheckResult](~~DescribeRiskCheckResult~~)。
     * @example `2`
     */
    "ItemId": number;
    /**
     * 指定分页查询时当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
