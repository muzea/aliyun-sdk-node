export interface GetUploadPolicyResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `4EA7EC9E-E571-0A48-BB70-66EB3A5DDE4A`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 密钥ID。
         * @example `LTAI5tEQPn4obqpuvGEg****`
         */
        AccessId: string;
        /**
         * 授权策略。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMS0xMC0xM1QxMToxMTo0OS4yMTBaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDAwXSx7ImtleSI6ImRhaWx5L3NlcnZpY2UvMjEvMTYzNDExOTkwOTIxMF9hbHBoYV83MTAxXzAucG5nIn1dfQ==`
         */
        Policy: string;
        /**
         * 签名。
         * @example `https://dha-regen-prod.oss-cn-shanghai.aliyuncs.com/daily/service/21/1634119909210_alpha_7101_0.png?Expires=1634119969&OSSAccessKeyId=LTAI5tEQPn4obqpuvGEg****&Signature=aglOPPZihml%2Fhe3GAMkS9zqovog%3D`
         */
        Signature: string;
        /**
         * Object名，使用UTF-8编码，长度在1-1023之间，不能以“/”“\”开头。
         * @example `daily/service/21/1634119909210_alpha_7101_0.png`
         */
        ObjectKey: string;
        /**
         * 文件名称。
         * @example `1634119909210_alpha_7101_0.png`
         */
        FileName: string;
        /**
         * 存储空间名称。
         * @example `dha-regen-prod`
         */
        BucketName: string;
        /**
         * 选择登录的访问域名。
         * @example `https://dha-regen-prod.oss-cn-shanghai.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 文件原有名称。
         * @example `1634119909210_alpha_7101_0.png`
         */
        OriginalFilename: string;
        /**
         * 临时授权的URL。
         * @example `https://dha-regen-prod.oss-cn-shanghai.aliyuncs.com/daily/service/21/1634119909210_alpha_7101_0.png?Expires=1634119969&OSSAccessKeyId=LTAI5tEQPn4obqpuvGEg****&Signature=aglOPPZihml%2Fhe3GAMkS9zqovog%3D`
         */
        SignedHttpUrl: string;
    };
}
