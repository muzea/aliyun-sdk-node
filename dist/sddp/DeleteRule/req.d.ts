export interface DeleteRuleRequest {
    /**
     * 敏感数据识别规则的id。
     * @example `122300`
     */
    "Id": number;
    /**
     * 该参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 数据资产所属的语言。-**zh**：中文-**en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
