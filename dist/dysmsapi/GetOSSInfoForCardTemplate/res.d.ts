export interface GetOSSInfoForCardTemplateResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 短信签名。
         * @example `阿里云`
         */
        Signature: string;
        /**
         * 访问地址。
         * @example ` https://alicom-cardsms-resources.oss-cn-zhangjiakou.aliyuncs.com`
         */
        Host: string;
        /**
         * 签名策略。
         * @example `eyJxxx0=`
         */
        Policy: string;
        /**
         * 超时时间。
         * @example `1634209418`
         */
        ExpireTime: string;
        /**
         * 阿里云账号ID。
         * @example `599333677478****`
         */
        AliUid: string;
        /**
         * 签名使用的AccessKey ID。
         * @example `LTAIxetqt1Dg****`
         */
        AccessKeyId: string;
        /**
         * 策略路径。
         * @example `1631792777`
         */
        StartPath: string;
        /**
         * OSS文件保存桶名称。
         * @example `alicom-cardsms-resources`
         */
        Bucket: string;
    };
}
