export interface CompleteMultipartUploadResponse {
    /**
     * 保存CompleteMultipartUpload请求响应内容的容器。
     */
    CompleteMultipartUploadResult: {
        /**
         * 是否对返回的key进行编码。
         * @example `url`
         */
        EncodingType: string;
        /**
         * 新创建Object的URL。
         * @example `http://oss-example.oss-cn-hangzhou.aliyuncs.com/multipart.data`
         */
        Location: string;
        /**
         * Bucket名称。
         * @example `example-bucket`
         */
        Bucket: string;
        /**
         * 新创建Object的名字。
         * @example `multipart.data`
         */
        Key: string;
        /**
         * Object生成时会创建相应的ETag ，ETag用于标识一个Object的内容。
         * 通过CompleteMultipartUpload请求创建的Object，ETag值是基于一定计算规则生成的唯一值，但不是其内容的MD5值。
         * >ETag值可以用于检查Object内容是否发生变化。不建议使用ETag作为Object内容的MD5来校验数据完整性。
         * @example `"B864DB6A936D376F9F8D3ED3BBE540****"`
         */
        ETag: string;
    };
}
