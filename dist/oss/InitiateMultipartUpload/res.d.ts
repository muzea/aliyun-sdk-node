export interface InitiateMultipartUploadResponse {
    /**
     * 保存Initiate Multipart Upload请求结果的容器。
     */
    InitiateMultipartUploadResult: {
        /**
         * 初始化一个Multipart Upload事件的Bucket名称。
         * @example `example-bucket`
         */
        Bucket: string;
        /**
         * 初始化一个Multipart Upload事件的Object名称。
         * @example `test.txt`
         */
        Key: string;
        /**
         * 唯一标识此次Multipart Upload事件的ID，用于后续调用UploadPart和CompleteMultipartUpload接口。
         * @example `0004B9894A22E5B1888A1E29F823****`
         */
        UploadId: string;
        /**
         * 指明返回结果中编码使用的类型。如果请求的参数中指定了encoding-type，那返回的结果会对Key进行编码。
         * @example `url`
         */
        EncodingType: string;
    };
}
