export interface DescribeOssObjectDetailV2Request {
    /**
     * 设置请求和返回消息的语言类型。默认值为**zh_cn**。取值
     * - **zh_cn**：简体中文
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * OSS存储对象的唯一标识ID。
     * > 调用[DescribeOssObjects](~~410152~~)接口获取ID。
     * @example `12300`
     */
    "Id"?: string;
}
