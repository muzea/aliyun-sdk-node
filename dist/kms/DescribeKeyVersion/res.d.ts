export interface DescribeKeyVersionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7021b6ec-4be7-4d3c-8a68-1e85d4d515a0`
     */
    RequestId: string;
    /**
     * 密钥版本的元数据。
     */
    KeyVersion: {
        /**
         * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中也会返回密钥ID。
         * @example `key-hzz630494463ejqjx****`
         */
        KeyId: string;
        /**
         * 密钥版本的全局唯一标识符。
         * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
         */
        KeyVersionId: string;
        /**
         * 创建密钥版本时的日期和时间（UTC时间）。
         * @example `2024-03-25T10:42:40Z`
         */
        CreationDate: string;
    };
}
