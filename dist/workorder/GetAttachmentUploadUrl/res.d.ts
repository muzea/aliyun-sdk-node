export interface GetAttachmentUploadUrlResponse {
    /**
     * 状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `ED195C2C-787F-511C-8204-714456781861`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功后返回的业务数据。
     */
    Data: {
        /**
         * 已上传的文件标识符
         * @example `cdb5d174-c282-4b2d-9048-e74ea2223127.jpg`
         */
        ObjectKey: string;
        /**
         * 上传OSS文件的签名URL
         * @example `https://workorder.oss-cn-beijing.aliyuncs.com
        /20220314/cabb80c3-430b-4079-a9f2-d2a0d1c2a587.png?Expires=1647328689&OSSAccessKeyId=LTAI4FrZPa9N1nG****&Signature=AbSEh26G3oYrJ8ivr4B0xzF89zk%3D`
         */
        PutSignedUrl: string;
        /**
         * 查询OSS文件的签名URL
         * @example `https://workorder.oss-cn-beijing.aliyuncs.com
        /20220314/cabb80c3-430b-4079-a9f2-d2a0d1c2a587.png?Expires=1647328689&OSSAccessKeyId=LTAI4FrZPa9N1nGW****&Signature=AbSEh26G3oYrJ8ivr4B0xzF89zk%3D`
         */
        GetSignedUrl: string;
    };
}
