export interface DeleteDataLimitRequest {
    /**
     * 实例、库、Bucket数据资产的唯一标识ID。
     * 可调用DescribeDataLimits接口，查看返回结果中的Id，获取数据资产的唯一标识ID。
     * @example `12033`
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
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
}
