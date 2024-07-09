export interface ListOssBucketRequest {
    /**
     * Bucket名称。
     * @example `iboxpublic****`
     */
    "BucketName"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
}
