export interface DescribeDataLimitDetailRequest {
    /**
     * 设置请求和接收消息的语言类型。取值：
     * - **zh**：简体中文（默认取值）
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置要查询的实例、库或Bucket数据资产的唯一标识ID。
     * > 您可以通过调用[DescribeDataLimits](~~DescribeDataLimits~~)获取标识ID。
     * @example `12300`
     */
    "Id": number;
    /**
     * 设置要查询的实例、库或Bucket数据资产所属的网络类型。取值：
     * - **1**：VPC专有网络
     * - **2**：经典网络
     * @example `1`
     */
    "NetworkType"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
