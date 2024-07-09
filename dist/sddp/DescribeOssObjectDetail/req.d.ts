export interface DescribeOssObjectDetailRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * OSS存储对象的唯一标识ID。
     * > 调用[DescribeOssObjects](~~410152~~)接口获取ID。
     * @example `12345213`
     */
    "Id": number;
}
