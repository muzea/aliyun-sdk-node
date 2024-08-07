export interface BindOutputBucketRequest {
    /**
     * 需要绑定的输出OSS Bucket名称，支持中英文、数字、中划线（-），不能以特殊符号开头，不超过64个字节。
     * @example `example-bucket-****`
     */
    "Bucket": string;
}
